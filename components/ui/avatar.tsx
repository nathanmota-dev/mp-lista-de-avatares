"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

const AvatarRoot = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
));
AvatarRoot.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

const avatarRootVariants = cva("", {
  variants: {
    size: {
      default: "h-10 w-10",
      sm: "h-8 w-8",
      lg: "h-20 w-20",
      xl: "h-24 w-24",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

const avatarBorderVariants = cva("absolute rounded-full bg-gradient-to-r", {
  variants: {
    size: {
      default: "-inset-0.5",
      sm: "-inset-0.5",
      lg: "-inset-1",
      xl: "-inset-1",
    },
    border: {
      none: "inset-0",
      default: "from-[#78d993] to-[#e087ff]",
      blue: "from-blue-500 via-sky-700 to-sky-200",
    },
  },
});

type AvatarVariants = VariantProps<typeof avatarRootVariants>;
type AvatarBorderVariants = VariantProps<typeof avatarBorderVariants>;

interface AvatarProps {
  imgUrl: string;
  userName: string;
  fallbackText: string;
}

const Avatar = ({
  imgUrl,
  userName,
  fallbackText,
  size,
  border,
}: AvatarProps & AvatarVariants & AvatarBorderVariants) => (
  <div className="relative inline-block">
    <div className={cn(avatarBorderVariants({ size, border }))} />
    <AvatarRoot className={cn(avatarRootVariants({ size }))}>
      <AvatarImage
        alt={`Avatar for ${userName}`}
        src={imgUrl}
        className="bg-transparent border border-purple-900 rounded-full"
      />
      <AvatarFallback className="bg-transparent border border-purple-900 rounded-full">
        {fallbackText}
      </AvatarFallback>
    </AvatarRoot>
  </div>
);
Avatar.displayName = "Avatar";

export { Avatar };
export type { AvatarVariants, AvatarBorderVariants };
