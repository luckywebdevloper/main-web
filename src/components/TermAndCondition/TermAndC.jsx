import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const TermAndC = ({ termAndCondition }) => {
  return (
    <Box>
      <Heading
        size={'md'}
        children="Terms and Condition"
        textAlign={['center', 'left']}
        my="4"
      />
      <Box h={'sm'} p="4">
        <Text
          textAlign={['center', 'left']}
          letterSpacing="widest"
          fontFamily={'heading'}
        >
          {termAndCondition}
        </Text>
        <Heading
          my={'4'}
          size={'xs'}
          children="Refund only applicaple for cancellation with in 1 days."
        />
      </Box>
    </Box>
  );
};

export default TermAndC;
