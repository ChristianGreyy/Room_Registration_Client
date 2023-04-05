export default function IEntity(entity: any) {
  let texts: string[] = [];
  let values = [];
  switch (entity) {
    case "users": {
      texts.push("Tên đăng nhập");
      texts.push("Quyền");
      values.push("username");
      values.push("role");
      break;
    }
    case "lessons": {
      texts.push("Tên tiết");
      texts.push("Giờ bắt đầu");
      texts.push("Phút bắt đầu");
      texts.push("Giờ kết thúc");
      texts.push("Phút kết thúc");
      values.push("name");
      values.push("startHour");
      values.push("startMinute");
      values.push("endHour");
      values.push("endMinute");
      break;
    }
    case "subjects": {
      texts.push("Tên môn học");
      values.push("name");
      break;
    }
    default: {
      //statements;
      break;
    }
  }
  return { texts, values };
}
