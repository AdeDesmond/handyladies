import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { formatDateString, multiFormatDateString } from "@/helpers/time";
import { Comments, User } from "@prisma/client";

interface CommentShowProps {
  item: Comments & any;
}

export const CommentShow = ({ item }: CommentShowProps) => {
  return (
    <div className="w-full mb-2">
      <div className="border p-2">
        <div className="">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-x-1">
              <Avatar>
                <AvatarImage />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className="text-muted-foreground font-semibold">
                {item.user.name}
              </p>
            </div>
            <Badge variant="secondary">
              <p>{multiFormatDateString(item.created_At)}</p>
            </Badge>
          </div>
        </div>
        <p className="pl-10">{item.content}</p>
      </div>
    </div>
  );
};
