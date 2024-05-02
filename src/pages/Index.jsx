import { Box, Flex, Grid, GridItem, Button, Text, VStack, HStack, useColorModeValue, Icon, Image } from "@chakra-ui/react";
import { FaNetworkWired, FaChartLine, FaBell, FaTools, FaPlus } from "react-icons/fa";

const Index = () => {
  const bg = useColorModeValue("gray.100", "gray.700");
  const cardBg = useColorModeValue("white", "gray.800");

  return (
    <Flex direction="column" h="100vh" p={4}>
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
        <Text fontSize="2xl" fontWeight="bold">
          Network Automation Dashboard
        </Text>
        <Button leftIcon={<FaPlus />} colorScheme="blue">
          Add Device
        </Button>
      </Flex>
      <Grid templateColumns="repeat(12, 1fr)" gap={4} flexGrow={1}>
        <GridItem colSpan={9} bg={cardBg} p={4} borderRadius="lg">
          <VStack align="stretch" spacing={4}>
            <Text fontSize="xl" fontWeight="bold">
              Main Dashboard
            </Text>
            <Flex wrap="wrap" justifyContent="space-between">
              <Box w="48%" p={4} bg={bg} borderRadius="lg">
                <Text mb={2}>Network Overview</Text>
                <Image src="https://images.unsplash.com/photo-1542382257-80dedb725088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwb3ZlcnZpZXd8ZW58MHx8fHwxNzE0NjY5NzE4fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" />
              </Box>
              <Box w="48%" p={4} bg={bg} borderRadius="lg">
                <Text mb={2}>Status Indicators</Text>
                <HStack spacing={4}>
                  <Icon as={FaNetworkWired} color="green.500" w={6} h={6} />
                  <Icon as={FaNetworkWired} color="red.500" w={6} h={6} />
                  <Icon as={FaNetworkWired} color="yellow.500" w={6} h={6} />
                </HStack>
              </Box>
            </Flex>
          </VStack>
        </GridItem>
        <GridItem colSpan={3} bg={cardBg} p={4} borderRadius="lg">
          <Text fontSize="xl" fontWeight="bold">
            Vendor-Specific
          </Text>
          <VStack spacing={4}>
            <Button w="full" leftIcon={<FaTools />} colorScheme="purple">
              Cisco
            </Button>
            <Button w="full" leftIcon={<FaTools />} colorScheme="orange">
              Juniper
            </Button>
            <Button w="full" leftIcon={<FaTools />} colorScheme="teal">
              Huawei
            </Button>
          </VStack>
        </GridItem>
        <GridItem colSpan={6} bg={cardBg} p={4} borderRadius="lg">
          <Text fontSize="xl" fontWeight="bold">
            Graphs and Analytics
          </Text>
          <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwYW5hbHl0aWNzJTIwZ3JhcGh8ZW58MHx8fHwxNzE0NjYzNTc0fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" />
        </GridItem>
        <GridItem colSpan={3} bg={cardBg} p={4} borderRadius="lg">
          <Text fontSize="xl" fontWeight="bold">
            Quick Access
          </Text>
          <VStack spacing={4}>
            <Button w="full" leftIcon={<FaChartLine />} colorScheme="green">
              Generate Report
            </Button>
            <Button w="full" leftIcon={<FaBell />} colorScheme="red">
              Alerts
            </Button>
          </VStack>
        </GridItem>
        <GridItem colSpan={3} bg={cardBg} p={4} borderRadius="lg">
          <Text fontSize="xl" fontWeight="bold">
            Alerts & Notifications
          </Text>
          <VStack spacing={4}>
            <Box w="full" p={4} bg={bg} borderRadius="lg">
              <Text>Latest Alerts</Text>
              <Text fontSize="sm">High CPU Usage on Router 5</Text>
              <Text fontSize="sm">Memory Leak Detected on Switch 8</Text>
            </Box>
          </VStack>
        </GridItem>
      </Grid>
      <Flex justifyContent="center" alignItems="center" p={4} bg={cardBg} mt={4} borderRadius="lg">
        <Text>© 2023 Network Automation Dashboard. All rights reserved.</Text>
      </Flex>
    </Flex>
  );
};

export default Index;
