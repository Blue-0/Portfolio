import clsx from "clsx";

interface Props {
  variant?:
    | "display"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "lead"
    | "body-lg"
    | "body-base"
    | "body-sm"
    | "caption1"
    | "caption2"
    | "caption3"
    | "caption4";
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "div" | "p" | "span";
  theme?: "black" | "white" | "gray" | "primary" | "secondary";
  weight?: "regular" | "meduim";
  className?: string;
  children: React.ReactNode;
}

export const Typography = ({
  variant = "h3",
  component: Component = "div",
  theme = "black",
  weight = "regular",
  className,
  children,
}: Props) => {
  let variantStyles: string = "",
    colorStyles: string = "",
    fontStyles: string = "";

  switch (variant) {
    case "display":
      variantStyles = "text-8xl";
      fontStyles="font-instrument"
      break;
    case "h1":
      variantStyles = "text-7xl";
      fontStyles="font-instrument"

      break;
    case "h2":
      variantStyles = "text-6xl";
      fontStyles="font-instrument"

      break;
    case "h3": //Default
      variantStyles = "text-5xl";
      fontStyles="font-instrument";

      break;
    case "h4":
      variantStyles = "text-4xl";
      fontStyles="font-instrument";

      break;
    case "h5":
      variantStyles = "text-3xl";
      fontStyles="font-instrument";

      break;
    case "lead":
      variantStyles = "text-2xl";
      fontStyles="font-instrument";

      break;
    case "body-lg":
      variantStyles = "text-lg";
      fontStyles="font-dongle";
      break;
    case "body-base":
      variantStyles = "text-base";
      fontStyles="font-dongle";
      break;
    case "body-sm":
      variantStyles = "text-sm";
      fontStyles="font-dongle";
      break;
    case "caption1":
      variantStyles = "text-caption1";
      fontStyles="font-dongle";
      break;
    case "caption2":
      variantStyles = "text-caption2";
      fontStyles="font-dongle";
      break;
    case "caption3":
      variantStyles = "text-caption3";
      fontStyles="font-dongle";
      break;
    case "caption4":
      variantStyles = "text-caption4";
      fontStyles="font-dongle";
      break;
  }

  switch (theme) {
    case "black": //Default
      colorStyles = "text-gray";
      break;
    case "white":
      colorStyles = "text-white";
      break;
    case "gray":
      colorStyles = "text-gray-700";
      break;
    case "primary":
      colorStyles = "text-primary";
      break;
    case "secondary":
      colorStyles = "text-secondary";
      break;
  }

  return (
    <Component
      className={clsx(
        variantStyles,
        colorStyles,
        fontStyles,
        weight === "meduim" && "font-medium",
        className,
      )}
    >
      {children}
    </Component>
  );
};
