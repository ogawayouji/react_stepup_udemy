import React, { memo, useCallback, useEffect, VFC } from 'react'
import { useDisclosure, Wrap, WrapItem, Box, Stack, Image, Text, Center, Spinner, Modal, ModalContent, ModalOverlay, ModalHeader, ModalBody, ModalCloseButton, FormControl, FormLabel, Input } from "@chakra-ui/react"
import { UserCard } from '../organisms/user/UserCard';
import { useAllUsers } from '../../hooks/useAllUsers';
import { UserDetailModal } from '../organisms/user/UserDetailModal';
import { useSelectUser } from '../../hooks/useSelectUser';
import { useLoginUser } from '../../hooks/useLoginUser';

export const UserManagement: VFC = memo(() => {
  const { getUsers, loading, users } = useAllUsers();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { onSelectUser, selectedUser } = useSelectUser();
  useEffect(() => getUsers(), []);
  const onClickUser = useCallback((id: number) => {
    // onOpen();
    onSelectUser({ id, users, onOpen });
  }, [users, onSelectUser, onOpen]);

  const { loginUser } = useLoginUser();
  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
      <Wrap p={{ base: 4, md: 10 }}>
        {users.map((user) => (
          <WrapItem key={user.id} mx="auto">
          {/* <WrapItem> */}
            {/* <div style={{ width: "100px", height: "100px", backgroundColor: "teal"}} /> */}
            {/* <Box w="260px" h="260px" bg="white" borderRadius="10px" shadow="md" p={4} _hover={{ cursor: "pointer", opacity: 0.8 }}>
              <Stack textAlign="center">
                <Image borderRadius="full" boxSize="160px" src="https://source.unsplash.com/random" alt="プロフィール画像" m="auto"/>
                <Text fontSize="lg" fontWeight="bold">
                  ogawa
                </Text>
                <Text fontSize="sm" color="glay">
                  youji ogawa
                </Text>
              </Stack>
            </Box> */}
            <UserCard 
              id={user.id}
              imageUrl="https://source.unsplash.com/random"
              userName={user.username}
              // userName="ogawa"
              fullName={user.name}
              // fullName="youji ogawa"
              onClick={onClickUser}
            />
          </WrapItem>
        ))}
      </Wrap>
      )}
          {/* <p>テスト</p> */}
      
      {/* <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slideInBottom">
        <ModalOverlay />
        <ModalContent pb={6}>
          <ModalHeader>ユーザー詳細</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>名前</FormLabel>
                <Input value="ogawa" iswReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>フルネーム</FormLabel>
                <Input value="youji ogawa" iswReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>MAIL</FormLabel>
                <Input value="ogawa@gmail.com" iswReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>TEL</FormLabel>
                <Input value="0000" iswReadOnly />
              </FormControl>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal> */}
      <UserDetailModal user={selectedUser} isOpen={isOpen} isAdmin={loginUser?.isAdmin} onClose={onClose} />
    </>
    // <p>ユーザー管理ページです</p>
  )
});