import React, { memo, ReactNode, VFC } from 'react'
import { Wrap, WrapItem, Box, Stack, Image, Text } from "@chakra-ui/react"


type Props = {
  id: number;
  imageUrl: string;
  userName: string;
  fullName: string;
  onClick: (id: number) => void;
};

export const UserCard: VFC<Props> = memo((props) => {
  const { id, imageUrl, userName, fullName, onClick } = props;
  return (
    <Box onClick={() => onClick(id)} w="260px" h="260px" bg="white" borderRadius="10px" shadow="md" p={4} _hover={{ cursor: "pointer", opacity: 0.8 }}>
    {/* <Box w="260px" h="260px" bg="white" borderRadius="10px" shadow="md" p={4} _hover={{ cursor: "pointer", opacity: 0.8 }}> */}
      <Stack textAlign="center">
        <Image 
          borderRadius="full"
          boxSize="160px" 
          // src="https://source.unsplash.com/random" 
          src={imageUrl}
          alt="プロフィール画像" 
          m="auto"
        />
        <Text fontSize="lg" fontWeight="bold">
          {/* ogawa */}
          {userName}
        </Text>
        <Text fontSize="sm" color="glay">
          {/* youji ogawa */}
          {fullName}
        </Text>
      </Stack>
    </Box>
  )
})