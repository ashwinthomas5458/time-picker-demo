# React Time Picker Dropdown
A time picker component for your react app. 

## Demo
You can checkout the [demo](https://timepicker.ashwinthomas.in/).

## Getting Started

### Installation

```shell
$ npm install --save @ashwinthomas/react-time-picker-dropdown
```

### Usage

```javascript
import TimePicker from '@ashwinthomas/react-time-picker-dropdown';

render() {
	<TimePicker
        defaultValue="10:10:00 am"
        useTwelveHourFormat={true}
        onTimeChange={handleTimeChange}        
    />
}
```

### TypeScript

Type definitions are included. The props type is exported as `TimePickerProps`:

```tsx
import TimePicker, { type TimePickerProps } from '@ashwinthomas/react-time-picker-dropdown';
```

### Compatibility

Supports React 17, 18 and 19. The bundles start with a `'use client'` directive, so the component can be imported directly from React Server Components (e.g. the Next.js App Router).

## User guide

### TimePicker

Displays an input field along with a dropdown to select time. Times can be selected with the mouse or the keyboard (arrow keys and Enter; Esc closes the dropdown). Clicking anywhere outside the picker selects the current time and closes the dropdown.

### Props

| Prop name            | Description                                                                                                                                                                                                  | Default value           | Example values                                                                                      |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------- | --------------------------------------------------------------------------------------------------- |
| defaultValue         | Sets default input value supports formats ` hh:mm:ss a` and `hh:mm:ss`                                                                                                                                       | `null`                  | `"10:10:00 am"`                                                                                     |
| placeholder          | Can be used to set input placeholder                                                                                                                                                                         | `"00 : 00 : 00"`        | `"hh : mm : ss"`                                                                                    |
| useTwelveHourFormat  | Use `useTwelveHourFormat` props to switch between 24 / 12 hour format                                                                                                                                        | `false`                 | `true`                                                                                              |
| onTimeChange         | Function called when user picks a time, including when the user clicks outside the picker. (Returns `null` if the input value is invalid.)                                                                   | n/a                     | (value)=>alert("Time selected is: ", value)                                                         |
| onInputChange        | Function called when picker value changed using the dropdown                                                                                                                                                 | n/a                     | (value)=>alert("Display time changed: ", value)                                                     |
| showCloseIcon        | `showCloseIcon` can be used to toggle close icon visibility                                                                                                                                                  | `true`                  | `true`                                                                                              |
| showClockIcon        | `showClockIcon` can be used to toggle clock icon visibility                                                                                                                                                  | `true`                  | `true`                                                                                              |
| allowBackdrop        | `allowBackdrop` can be used to toggle backdrop                                                                                                                                                               | `false`                 | `false`                                                                                             |