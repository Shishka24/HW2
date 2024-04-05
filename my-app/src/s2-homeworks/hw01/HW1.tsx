import React from "react";
import Message from "./message/Message";
import MessageSender from "./message-sender/MessageSender";
import s2 from "../../s1-main/App.module.css";
import FriendMessage from "./friend-message/FriendMessage";
import avatar from "./avatar.png";

/*
 * 1 - описать тип MessageType
 * 2 - описать тип MessagePropsType в файле Message.tsx
 * 3 - в файле Message.tsx отобразить приходящие данные
 * 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
 * 5 - сделать стили в соответствии с дизайном
 * */
export type UserType = {
  avatar: string;
  name: string;
};

export type SingleMessageType = {
  text: string;
  time: string;
};
// нужно создать правильный тип вместо any
export type MessageType = {
  id: number;
  user: UserType;
  message: SingleMessageType;
};

// структуру объекта не менять
export const message0: MessageType = {
  id: 0,
  user: {
    avatar:
      "https://previews.123rf.com/images/iaroslavtymonko/iaroslavtymonko2305/iaroslavtymonko230500033/203938297-3d-icon-avatar-cartoon-character-man-businessman-in-business-suit-looking-at-camera-on-isolated.jpg", // можно менять
    name: "Billy", // можно менять
  },
  message: {
    text: "Hey, My Name is Billy ", // можно менять
    time: "22:00", // можно менять
  },
};
export const friendMessage0: MessageType = {
  id: 100,
  user: {
    avatar:
      "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png", // можно менять
    name: "Batman", // можно менять
  },
  message: {
    text: "I'm Batman",
    time: "22:00", // можно менять
  },
};

const HW1 = () => {
  return (
    <div id={"hw1"}>
      <div className={s2.hwTitle}>Homework #1</div>
      <div className={s2.hw}>
        {/*проверка отображения (не менять)*/}
        <div>
          <Message message={message0} />
          <FriendMessage message={friendMessage0} />
        </div>

        {/*для автоматической проверки дз (не менять)*/}
        <MessageSender M={Message} />
      </div>
    </div>
  );
};

export default HW1;
