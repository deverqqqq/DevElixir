---
title: "Mappers"
sidebar_label: Mappers
keywords: [Mapper, 'Object Mapping']
description: dotnet Object Mapping
sidebar_position: 2
tags: [Mapper]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

物件映射是每一個開發人員基本上都會遇到的問題，不論是多層架構下不同層級間的物件映射，又或者是當系統從 Client 端收到 Request 後，需要把部分欄位拿出來，轉換為 QueryModel 查詢 Database。

同時，物件映射也是一個頗具爭議的話題，以 AutoMapper 為例，透過關鍵字查詢，可以看到很多討論。

[Use or not automapper?](https://www.reddit.com/r/dotnet/comments/16ybu27/use_or_not_automapper/)  
[Is Automapper the most hated library?](https://www.reddit.com/r/dotnet/comments/13fb1q3/is_automapper_the_most_hated_library/)  
[Is using automapper bad?](https://www.reddit.com/r/csharp/comments/ykcp7a/is_using_automapper_bad/)  
[Is AutoMapper an Anti-Pattern?](https://www.reddit.com/r/dotnet/comments/16clreb/is_automapper_an_antipattern/)

主要的爭議主要是透過 Mapper 轉換物件，容易讓開發人員在轉換的套件上面寫太多自定義轉換規則，久而久之，這些`magic method`會讓系統的除錯跟邏輯分散，有一部分的商業邏輯被寫在轉換，有些又寫在其他地方。

我自己的開發經驗，使用 Mapper 的時候，只應該屬於下面的情境。

:::tip
1. 讓不同層之間的 Model 解耦
2. 避免撰寫簡單且重複的 Mapping Code
:::

所以不管使用哪一個 Mapper 工具，都應該遵守下列原則

:::tip
1. 欄位名稱和型別完全相同才做映射，其他請在映射結束後撰寫。
2. 集合與非集合不互相映射，如果有需求，請自行寫映射邏輯。
:::

範例 1:
```csharp
// 未對應到的欄位，自行在映射後處理
var body = _mapper.Map<AddressDto>(data);
body.CreateUserId = _loginUserInfo.UserId;
```

範例 2:
```csharp
using AutoMapper;

var datas = new List<AddressInfo>()
{
    new AddressInfo(){ Address = "Address_1", Name = "111"},
    new AddressInfo(){ Address = "Address_2", Name = "111"},
    new AddressInfo(){ Address = "Address_3", Name = "111"},
};

// 盡量避免在 Mapper 工具內寫這種轉換，維持物件映射的規則單純
var config = new MapperConfiguration(cfg =>
{
    cfg.CreateMap<List<AddressInfo>, AddressDto>()
        .ForMember(dest => dest.Addresses, opt => opt.MapFrom(src => src.Select(x => x.Address).ToList()))
        .ForMember(dest => dest.Name, opt => opt.MapFrom(src => src.FirstOrDefault().Name));
});

var mapper = config.CreateMapper();
var result = mapper.Map<AddressDto>(datas);
```

## AutoMapper

[Github](https://github.com/AutoMapper/AutoMapper)

1. 需設定物件映射定義：`Profile`, `MapperConfiguration`
2. 需要使用 Mapper 實體：可以透過 DI Register 註冊，或是透過 MapperConfiguration instance call `CreateMapper`。

:::info
在 version 13.0 之後，不再需要額外安裝 DependencyInjection 套件，已經被整併進套件 Core 內。
:::

<Tabs>
  <TabItem value="Basic Usage">

```csharp
var config = new MapperConfiguration(cfg =>
{
    cfg.CreateMap<ItemDto, Item>();
    cfg.CreateMap<AddressDto, Address>();
});

var mapper = config.CreateMapper();
var result = mapper.Map<Item>(something);
```

  </TabItem>
  
  <TabItem value="Using DI-Profile">

```csharp
// Profile
public class ServiceMappingProfile : Profile
{
    public ServiceMappingProfile()
    {
        this.CreateMap<ItemDataModel, ItemDto>();
        this.CreateMap<AddressDataModel, AddressDto>();
    }
}

// Register
public static IServiceCollection AddServiceInjections(
    this IServiceCollection services)
{
    services.AddAutoMapper(typeof(ServiceMappingProfile));

    return services;
}
```

  </TabItem>
</Tabs>

## Mapster

[Github](https://github.com/MapsterMapper/Mapster)

1. 開箱即用，不需要額外設定，除非需要定義預設以外的映射規則。

<Tabs>
  <TabItem value="Mapster">

```csharp
// install Nugetpackage: Mapster
// 可以在不設定的前提下，自動完成轉換 (預設)

var data = Address.GetInfo();

// 直接呼叫靜態方法 Adapt
var calssResult = data.Adapt<AddressDto>();
```

  </TabItem>
  
</Tabs>

## Mapperly

[Github](https://github.com/riok/mapperly)

1. 需設定物件映射定義：`MapperClass`
2. Mapperly 使用 `Partial Class` & `Partial Method` + `SourceGenerator` 實作映射功能。  
所以**效能跟手動編寫映射邏輯一樣**，是目前 dotnet 相關套件中，效能最好的。

3. 透過 `SourceGenerator` 還有一個好處，就是可以讓開發人員直接看到實際映射的邏輯，也可以下中斷點，此外，欄位的參考可以知道物件相依實際的狀況。
4. 定義的 MapperClass 可以是靜態的，取決於開發上需要哪一種方式使用。

<Tabs>
  <TabItem value="Mapper Class">

```csharp
// install Nugetpackage: Mapperly

// Mapper Class
[Mapper]
public partial class AddressMapper
{
    public partial AddressDto MapToDto(AddressInfo info);
}

// Mapper Usage
var info = new AddressInfo() { Address = "Address", Name = "Name" };
var result = new AddressMapper().MapToDto(info);
```
  </TabItem>

  <TabItem value="Mapper Static Class">

```csharp
// install Nugetpackage: Mapperly

// Mapper Class
[Mapper]
public static partial class AddressStaticMapper
{
    public static partial AddressDto Map(this AddressInfo info);
}

// Mapper Usage
var info = new AddressInfo() { Address = "Address", Name = "Name" };
var result = info.Map();
```

  </TabItem>
</Tabs>

透過 `SourceGenerator` 產生的內容如下

<Tabs>
  <TabItem value="AddressMapper.g.cs">

```csharp
public partial class AddressMapper
{
    [global::System.CodeDom.Compiler.GeneratedCode("Riok.Mapperly", "3.6.0.0")]
    public partial global::AddressDto MapToDto(global::AddressInfo info)
    {
        var target = new global::AddressDto();
        target.Address = info.Address;
        target.Name = info.Name;
        return target;
    }
}
```
  </TabItem>

  <TabItem value="AddressStaticMapper.g.cs">

```csharp
public static partial class AddressStaticMapper
{
    [global::System.CodeDom.Compiler.GeneratedCode("Riok.Mapperly", "3.6.0.0")]
    public static partial global::AddressDto Map(this global::AddressInfo info)
    {
        var target = new global::AddressDto();
        target.Address = info.Address;
        target.Name = info.Name;
        return target;
    }
}
```

  </TabItem>
</Tabs>

## 比較

依照我自身的使用情境

Mapperly > Mapster >> AutoMapper >> Manual

### Tradeoff

1. Mapperly 可以直接看到產生後的程式碼。
2. Mapperly 設定靈活，使用 Static 宣告使用上會很直觀。
3. Mapperly 效能最好。
4. Mapster 無須設定即可使用，開發效率上最快最方便。

| Package    | Usability  | Performance |
| ---------- | :--------: | :---------: |
| Mapperly   |  ⭐⭐⭐⭐  | ⭐⭐⭐⭐⭐  |
| Mapster    | ⭐⭐⭐⭐⭐ |  ⭐⭐⭐⭐   |
| AutoMapper |   ⭐⭐⭐   |   ⭐⭐⭐    |
| Manual     |     ⭐     | ⭐⭐⭐⭐⭐  |

## 延伸閱讀
[AutoMapper's Design Philosophy](https://www.jimmybogard.com/automappers-design-philosophy/)  
