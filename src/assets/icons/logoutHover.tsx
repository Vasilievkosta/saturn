import { Ref, SVGProps, forwardRef, memo } from "react";
const SvgComponent = (
  props: { iconColor: string } & SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => {
  return (
    <svg
      className={props.className}
      fill={props.iconColor}
      height={18}
      ref={ref}
      viewBox={"0 0 24 24"}
      width={18}
      xmlns={"http://www.w3.org/2000/svg"}
      {...props}
    >
      <path
        d={
          "M7 6a1 1 0 0 0 0-2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2H6V6h1Zm13.8 5.4-2.8-4a1 1 0 1 0-1.6 1.2L18 11h-8a1 1 0 0 0 0 2h8l-1.8 2.4a1 1 0 0 0 1.6 1.2l3-4a1 1 0 0 0 0-1.2Z"
        }
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgComponent);

export default memo(ForwardRef);
