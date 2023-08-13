# ir-guest-info



<!-- Auto Generated Below -->


## Properties

| Property                 | Attribute | Description | Type             | Default |
| ------------------------ | --------- | ----------- | ---------------- | ------- |
| `data`                   | --        |             | `guestInfo`      | `null`  |
| `setupDataCountries`     | --        |             | `selectOption[]` | `null`  |
| `setupDataCountriesCode` | --        |             | `selectOption[]` | `null`  |


## Events

| Event          | Description | Type                     |
| -------------- | ----------- | ------------------------ |
| `getSetupData` |             | `CustomEvent<any>`       |
| `submitForm`   |             | `CustomEvent<guestInfo>` |


## Dependencies

### Depends on

- [ir-select2](../ir-select2-comp)
- [ir-button](../ir-button)

### Graph
```mermaid
graph TD;
  ir-guest-info --> ir-select2
  ir-guest-info --> ir-button
  style ir-guest-info fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
