/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Message {
  id: string;
  name: string;
  department: string;
  message: any[];
  time: string;
  isSender: boolean;
  role: string;
  createdAt: any;
}

export interface ChatMessageProps {
  name: string;
  department: string;
  message: string;
  time: string;
  isSender: boolean;
  avatar: string;
  files: any;
  isMultiSelectActive: boolean;
  messageId: any;
  replyMsgId?: string;
  isStreamingStatus: boolean;
}

export interface ContextMenuPosition {
  x: number;
  y: number;
}
export interface ContextMenuPosition {
  x: number;
  y: number;
}

export interface SocketMessage {
  isStreaming?: boolean;
  type: string;
  message: Array<{
    files: any;
    id: string;
    message: string;
    channelId: string;
    senderId: string;
    createdAt: string;
    updatedAt: string;
    isPinned: boolean;
    isRead: boolean;
    user: {
      id: string;
      username: string;
      email: string;
      avatar: string;
      role: string;
      status: string;
    };
  }>;
  pinnedMessage: Array<{
    id: string;
    message: string;
    channelId: string;
    senderId: string;
    createdAt: string;
    updatedAt: string;
    isPinned: boolean;
    isRead: boolean;
    user: {
      id: string;
      username: string;
      email: string;
      avatar: string;
      role: string;
      status: string;
    };
  }>;
}
export type Chanel = {
  id: string;
  userId: string;
  groupId: string;
  chanelName: string;
  chanelImage: string;
  description: string;
  memberIds: string[];
  chanelType: "PRIVATE" | "PUBLIC"; // Assuming there can be 'PRIVATE' or 'PUBLIC' types
  traderLink: string;
  createdAt: string;
  updatedAt: string;
};

export type Group = {
  id: string;
  userId: string;
  groupName: string;
  groupImage: string;
  createdAt: string;
  updatedAt: string;
  chanel: Chanel[]; // Array of channels in the group
};

export type Result = Group[];
