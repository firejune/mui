import * as React from 'react';
import { Select as BaseSelect, SelectProps } from '@mui/base/Select';
import {
  Option as BaseOption,
  OptionProps,
  OptionOwnerState,
} from '@mui/base/Option';
import { useTheme } from '@mui/system';
import clsx from 'clsx';

const getOptionColorClasses = ({
  selected,
  highlighted,
  disabled,
}: Partial<OptionOwnerState<number>>) => {
  let classes = '';
  if (disabled) {
    classes += ' text-slate-400 dark:text-slate-700';
  } else {
    if (selected) {
      classes +=
        ' bg-purple-100 dark:bg-purple-950 text-purple-950 dark:text-purple-50';
    } else if (highlighted) {
      classes +=
        ' bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-300';
    }
    classes +=
      ' hover:dark:bg-slate-800 hover:bg-slate-100 hover:dark:text-slate-300 hover:text-slate-900';
  }
  return classes;
};

const Option = React.forwardRef<HTMLLIElement, OptionProps<number>>((props, ref) => {
  return (
    <BaseOption
      ref={ref}
      {...props}
      slotProps={{
        root: ({ selected, highlighted, disabled }) => ({
          className: `list-none p-2 rounded-lg cursor-default last-of-type:border-b-0 ${getOptionColorClasses(
            { selected, highlighted, disabled },
          )}`,
        }),
      }}
    />
  );
});

function useIsDarkMode() {
  const theme = useTheme();
  return theme.palette.mode === 'dark';
}

export default function UnstyledSelectBasic() {
  // Replace this with your app logic for determining dark modes
  const isDarkMode = useIsDarkMode();

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <Select defaultValue={10}>
        <Option value={10}>Ten</Option>
        <Option value={20}>Twenty</Option>
        <Option value={30}>Thirty</Option>
      </Select>
    </div>
  );
}

const resolveSlotProps = (fn: any, args: any) =>
  typeof fn === 'function' ? fn(args) : fn;

const Select = React.forwardRef(function CustomSelect<
  TValue extends {},
  Multiple extends boolean,
>(props: SelectProps<TValue, Multiple>, ref: React.ForwardedRef<HTMLButtonElement>) {
  // Replace this with your app logic for determining dark modes
  const isDarkMode = useIsDarkMode();

  return (
    <BaseSelect
      ref={ref}
      {...props}
      className={clsx('CustomSelect', props.className)}
      slotProps={{
        ...props.slotProps,
        root: (ownerState) => {
          const resolvedSlotProps = resolveSlotProps(
            props.slotProps?.root,
            ownerState,
          );
          return {
            ...resolvedSlotProps,
            className: clsx(
              `text-sm font-sans box-border w-80 px-3 py-2 rounded-lg text-left bg-white dark:bg-slate-800 border border-solid border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-300 transition-all hover:bg-slate-50 dark:hover:bg-slate-700 outline-0 shadow shadow-slate-200 dark:shadow-slate-900 ${
                ownerState.focusVisible
                  ? 'border-purple-400 shadow-outline-purple'
                  : ''
              } ${
                ownerState.open ? 'after:content-["▴"]' : 'after:content-["▾"]'
              } after:float-right`,
              resolvedSlotProps?.className,
            ),
          };
        },
        listbox: (ownerState) => {
          const resolvedSlotProps = resolveSlotProps(
            props.slotProps?.listbox,
            ownerState,
          );
          return {
            ...resolvedSlotProps,
            className: clsx(
              `text-sm font-sans p-1.5 my-3 w-80 rounded-xl overflow-auto outline-0 bg-white dark:bg-slate-900 border border-solid border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-300 shadow shadow-slate-200 dark:shadow-slate-900`,
              resolvedSlotProps?.className,
            ),
          };
        },
        popper: (ownerState) => {
          const resolvedSlotProps = resolveSlotProps(
            props.slotProps?.popper,
            ownerState,
          );
          return {
            ...resolvedSlotProps,
            className: clsx(
              `${isDarkMode ? 'dark' : ''} z-10`,
              resolvedSlotProps?.className,
            ),
          };
        },
      }}
    />
  );
});
