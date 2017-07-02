# MooSkin UI - Small Icon Button Component

The MooSkin Small Icon Button Component works similar to the normal HTML `<button/>` element, but with pre-defined styling and attributes.

___

### Usage

To start using the Small Icon Button Component first you have to Import it

```
Import {SmallIconButton} from 'mooskin';
```
or
```
import SmallIconButton from 'mooskin/lib/SmallIconButton';
```

And then you can simply start using it by typing

```
<SmallIconButton attribute1="atr" attribute2="asd" />
```

For easy use, the components are named similar to normal HTML components but with a capital first letter.

Like the `<button/>` element it will accept given attributes and render differently based on the given attributes

### Examples


Making it disabled, in this case the proper disabled class will be loaded (ex. disabling cursor)

```
<SmallIconButton disabled />
```

or pass it a function for event handling

```
<SmallIconButton onClick={yourFunc} />
```

or just give it a custom style

```
<SmallIconButton style={yourStyle} />
```

but the most important one is to give it an icon

```
<SmallIconButton icon={'search'} />
```

give it a transparent style where only the icon is visible

```
<SmallIconButton transparent />
```

## Supported attributes

* `id` - id of the element
* `icon` - icon for the button
* `disabled` - button should be disabled
* `className` - css class
* `transparent` - a style variaton of the button 
* `style` - button style
* `onClick` - callback to be triggered on button click

Allthough these attributes are supported, all of them are optional.

## Supported icons (so far)

All [Google Font icons](https://material.io/icons/) are supported.

#### For more

___

[MooSkin-UI](https://github.com/moosend/mooskin-ui)