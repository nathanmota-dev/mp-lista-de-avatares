"use client";

import {
  Avatar,
  AvatarBorderVariants,
  AvatarVariants,
} from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { generateUsers } from "@/lib/data";
import { useState } from "react";

const users = generateUsers(50);

export default function Home() {
  const [size, setSize] = useState<AvatarVariants["size"]>("default");
  const [border, setBorder] =
    useState<AvatarBorderVariants["border"]>("default");

  return (
    <main className="flex min-h-screen flex-col items-center justify-start px-10 bg-purple-900">
      <div className="my-24 flex gap-12 w-full">
        <Select
          onValueChange={(size) => setSize(size as AvatarVariants["size"])}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Size" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">default</SelectItem>
            <SelectItem value="sm">sm</SelectItem>
            <SelectItem value="lg">lg</SelectItem>
            <SelectItem value="xl">xl</SelectItem>
          </SelectContent>
        </Select>

        <Select
          onValueChange={(border) =>
            setBorder(border as AvatarBorderVariants["border"])
          }
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Border" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">default</SelectItem>
            <SelectItem value="none">none</SelectItem>
            <SelectItem value="blue">blue</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="w-full flex flex-wrap [&>div]:-ml-3 ml-3 [&>div]:mt-3 -mt-3">
        {users.map((user, i) => (
          <Avatar
            key={i}
            imgUrl={user.imgUrl}
            fallbackText={user.fallbackText}
            userName={user.userName}
            size={size}
            border={border}
          />
        ))}
      </div>
    </main>
  );
}
