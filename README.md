## Installation

* `git clone <repository-url>` this repository
* `cd power-select-in-modal-focus-bug`
* `yarn install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

## Bug description

```
Hi, what are possible reasons that an input-field doesn't get the focus via `.focus()`? Having this problem right now with a power-select which is placed in a modal (both wormholed) where the search-input doesn't get focused when you open the select-options. Already tried to add a delay with `later()`, tried to unfocus the previous focused element first with `document.activeElement.blur()` - but the focus stays on the power-select-trigger... The strange thing is if you click on the search-input once, the focus works (also if you close the power-select + reopen it)
```

## How to reproduce

1. open power-select
1. **-> no focus on search-input**
1. click on search-input
1. **-> focus on search-input**
1. close power-select
1. open power-select
1. **-> focus still works**
1. close power-select + modal
1. open modal + power-select
1. **-> no focus on search-input**
