import { memo, useCallback, useContext, useRef, useState } from 'react';

import { useTranslation } from 'next-i18next';

import { throttle } from '@/utils/data/throttle';

import { Message } from '@/types/chat';

import HomeContext from '@/pages/api/home/home.context';

import { ChatInput } from './ChatInput';

interface Props {}

export const Chat = memo(({}: Props) => {
  const { t } = useTranslation('chat');

  const {
    state: { conversations },
    dispatch: homeDispatch,
  } = useContext(HomeContext);

  const [currentMessage, setCurrentMessage] = useState<Message>();
  const [autoScrollEnabled, setAutoScrollEnabled] = useState<boolean>(true);
  const [showScrollDownButton, setShowScrollDownButton] =
    useState<boolean>(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = useCallback(
    async (message: Message, deleteCount = 0) => {
      // Handle send logic when conversations changed
      console.log(message);
    },
    [conversations],
  );

  const scrollToBottom = useCallback(() => {
    if (autoScrollEnabled) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      textareaRef.current?.focus();
    }
  }, [autoScrollEnabled]);

  const handleScrollDown = () => {
    chatContainerRef.current?.scrollTo({
      top: chatContainerRef.current.scrollHeight,
      behavior: 'smooth',
    });
  };

  const onClearAll = () => {
    if (confirm(t<string>('Are you sure you want to clear all messages?'))) {
    }
  };

  const scrollDown = () => {
    if (autoScrollEnabled) {
      messagesEndRef.current?.scrollIntoView(true);
    }
  };
  const throttledScrollDown = throttle(scrollDown, 250);

  return (
    <div className="relative flex-1 overflow-hidden bg-white dark:bg-[#343541]">
      <>
        <ChatInput
          textareaRef={textareaRef}
          onSend={(message) => {
            setCurrentMessage(message);
            handleSend(message, 0);
          }}
          onScrollDownClick={handleScrollDown}
          onRegenerate={() => {
            if (currentMessage) {
              handleSend(currentMessage, 2);
            }
          }}
          showScrollDownButton={showScrollDownButton}
        />
      </>
    </div>
  );
});
Chat.displayName = 'Chat';
