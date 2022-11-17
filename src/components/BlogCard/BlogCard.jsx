
import { Card, CardHeader, CardPoster, CardBody, Tag, CardTitle, CardText, CardFooter, UserBox, Avatar, UserInfo, Date as DateMy, UserName } from './BlogCard.styled';
import { formatDistanceToNow } from 'date-fns';

export const BlogCard = ({poster, tag, title, description, userName, avatar, postedAt}) => {
  return (

<Card>
  <CardHeader>
    <CardPoster
      src={poster}
      alt="card__image"
    />
  </CardHeader>
  <CardBody>
    <Tag>{tag}</Tag>
    <CardTitle>{title}</CardTitle>
    <CardText>
      {description}
    </CardText>
  </CardBody>
  <CardFooter>
    <UserBox>
      <Avatar src={avatar} alt="Jane Doe" />
      <UserInfo>
        <UserName>{userName}</UserName>
        <DateMy>{formatDistanceToNow(new Date(postedAt), { addSuffix: true })}</DateMy>
      </UserInfo>
    </UserBox>
  </CardFooter>
</Card>

  );
};
