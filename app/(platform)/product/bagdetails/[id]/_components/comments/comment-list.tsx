import { Comments, User } from "@prisma/client";
import { CommentShow } from "./comment-show";

interface CommentListProps {
  commentsByProduct: Comments[];
}

export const CommentList = ({ commentsByProduct }: CommentListProps) => {
  const renderedListComment = commentsByProduct.map((item: any) => (
    <CommentShow key={item.id} item={item} />
  ));
  return <div>{renderedListComment}</div>;
};
