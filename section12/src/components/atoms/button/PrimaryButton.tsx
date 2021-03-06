import React, { memo, ReactNode, VFC } from 'react'
import { Button } from '@chakra-ui/react'
import { HamburgerIcon } from "@chakra-ui/icons"

type Props = {
  children: ReactNode;
  isFullWidth?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  onClick: () => void;
};

export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children, disabled = false, isFullWidth = false, isLoading = false, onClick } = props;
  // const { children, disabled = false, isLoading = false, onClick } = props;
  return (
  <Button bg="teal.400" color="white" _hover={{ opacity: 0.8 }} isFullWidth={isFullWidth} disabled={disabled || isLoading} isLoading={isLoading} onClick={onClick}>{children}</Button>
    // <Button bg="teal.400" color="white" _hover={{ opacity: 0.8 }} disabled={disabled || isLoading} isLoading={isLoading} onClick={onClick}>ログイン</Button>

  )
})