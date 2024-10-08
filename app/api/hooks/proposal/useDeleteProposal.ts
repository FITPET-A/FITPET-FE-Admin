import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@chakra-ui/react";
import { deleteProposal } from "@app/api/proposalAPI";

const useDeleteProposal = () => {
  const toast = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (proposalId: number) => deleteProposal(proposalId),
    onSuccess: () => {
      toast({
        title: "제휴 제안이 성공적으로 삭제되었습니다.",
        status: "success",
        isClosable: true,
      });
      queryClient.invalidateQueries({ queryKey: ["proposal"] });
    },
  });
};

export default useDeleteProposal;
