import React, { memo, useCallback, VFC } from 'react';
import { Flex, Heading, Link, Box, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerBody, Button, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons"
import { MenuIconButton } from '../atoms/button/MenuIconButton';
import { MenuDrawer } from '../molecules/MenuDrawer';
import { useHistory } from "react-router-dom"

export const Header:VFC = memo(() => {
  // return <div style={{ height: "50px", backgroundColor: "teal" }}></div>
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();

  const onClickHome = useCallback(() => history.push("/home"), [history]);
  const onClickUserManagement = useCallback(() => history.push("/home/user_management"), []);
  const onClickSetting = useCallback(() => history.push("/home/setting"), [])
  return (
    <>
      <Flex as="nav" bg="teal.500" color="gray.50" align="center" justify="space-between" padding={{ base: 3, md: 5 }}>
        <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }} onClick={onClickHome}>
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>ユーザー管理アプリ</Heading>
        </Flex>
        <Flex align="center" fontSize="sm" flexGrow={2} display={{ base: "none", md: "flex" }}>
          <Box>
            <Link onClick={onClickUserManagement}>ユーザー一覧</Link>
          </Box>
          <Link onClick={onClickSetting}>設定</Link>
        </Flex>
        {/* <IconButton aria-label="メニューボタン" icon={<HamburgerIcon />}
        size="sm" variant="unstyled" display={{ base: "block", md: "none"}} onClick={onOpen} /> */}
        <MenuIconButton onOpen={onOpen}/>
      </Flex>
      {/* <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody p={0} bg="gray.100">
              <Button w="100%">TOP</Button>
              <Button w="100%">ユーザー一覧</Button>
              <Button w="100%">設定</Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer> */}
      <MenuDrawer onClose={onClose} isOpen={isOpen} onClickHome={onClickHome} onClickUserManagement={onClickUserManagement} onClickSetting={onClickSetting}/>
    </>
  )
});
