import { CSSProperties, ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

type Props = ComponentPropsWithoutRef<"div"> & {
  contentMarginTop?: CSSProperties["marginTop"];
};

export const My = forwardRef<ElementRef<"div">, Props>(
  ({ className, contentMarginTop = "36px", style, children, ...rest }, ref) => {
    return (
      <div ref={ref} {...rest}>
        {children}
      </div>
    );
  }
);
