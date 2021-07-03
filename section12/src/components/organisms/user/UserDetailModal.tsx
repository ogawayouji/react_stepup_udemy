import React, { ChangeEvent, memo, ReactNode, useEffect, useState, VFC } from 'react'
import { Wrap, WrapItem, Box, Stack,  Modal, ModalContent, ModalOverlay, ModalHeader, ModalBody, ModalCloseButton, FormControl, FormLabel, Input, ModalFooter } from "@chakra-ui/react"
import { User } from '../../../types/api/user';
import { PrimaryButton } from '../../atoms/button/PrimaryButton';


type Props = {
  user: User | null;
  isOpen: boolean;
  isAdmin?: boolean;
  onClose: () => void;
};

export const UserDetailModal: VFC<Props> = memo((props) => {
  const { user, isOpen, isAdmin = false, onClose } = props;

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    setUsername(user?.username ?? "");
    setName(user?.name ?? "");
    setEmail(user?.email ?? "");
    setPhone(user?.phone ?? "");
  }, [user])

  const onChangeUsername = (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value);

  const onClickUpdate = () => alert();  
  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slideInBottom">
        <ModalOverlay />
        <ModalContent pb={2}>
          <ModalHeader>ユーザー詳細</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>名前</FormLabel>
                {/* <Input value="ogawa" isReadOnly /> */}
                <Input value={username} onChange={onChangeUsername} isReadOnly={!isAdmin} />
                {/* <Input value={user?.username} isReadOnly={!isAdmin} /> */}
              </FormControl>
              <FormControl>
                <FormLabel>フルネーム</FormLabel>
                <Input value={name} onChange={onChangeName} isReadOnly={!isAdmin} />
                {/* <Input value={user?.name} isReadOnly={!isAdmin} /> */}
              </FormControl>
              <FormControl>
                <FormLabel>MAIL</FormLabel>
                <Input value={email} onChange={onChangeEmail} isReadOnly={!isAdmin} />
                {/* <Input value={user?.email} isReadOnly={!isAdmin} /> */}
              </FormControl>
              <FormControl>
                <FormLabel>TEL</FormLabel>
                <Input value={phone} onChange={onChangePhone} isReadOnly={!isAdmin} />
                {/* <Input value={user?.phone} isReadOnly={!isAdmin} /> */}
              </FormControl>
            </Stack>
          </ModalBody>
          {isAdmin && (
            <ModalFooter>
              <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
            </ModalFooter>
          )}

        </ModalContent>
      </Modal>
  )
})