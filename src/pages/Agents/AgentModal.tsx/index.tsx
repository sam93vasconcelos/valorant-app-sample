import { Button, Col, Modal, Row } from "antd";
import { Ability, Agent } from "../Agents.interfaces";
import AbilityModal from "../AbilityModal.tsx";
import { useState } from "react";

interface AgentModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedAgent: Agent | null;
}

const AgentModal: React.FC<AgentModalProps> = ({
  open,
  setOpen,
  selectedAgent,
}) => {
  const [openAbilityModal, setOpenAbilityModal] = useState(false);
  const [selectedAbility, setSelectedAbility] = useState<Ability | null>(null);

  return (
    <Modal
      width={1000}
      open={open}
      onCancel={() => setOpen(false)}
      title={selectedAgent?.displayName}
      footer={
        <div>
          <Button
            type="text"
            style={{ color: "#2070C7", fontWeight: "bold" }}
            onClick={() => setOpen(false)}
          >
            Fechar
          </Button>
        </div>
      }
    >
      <AbilityModal
        open={openAbilityModal}
        onCancel={() => setOpenAbilityModal(false)}
        selectedAbility={selectedAbility}
      />

      <div>
        <Row>
          <Col span={12}>
            <img
              src={selectedAgent?.displayIcon}
              alt={selectedAgent?.displayName}
            />
            <h2>{selectedAgent?.displayName}</h2>
          </Col>
          <Col span={12}>
            <p>{selectedAgent?.description}</p>

            <h3>Habilidades</h3>

            <Row gutter={24}>
              {selectedAgent?.abilities.map((ability) => (
                <Col
                  span={6}
                  key={ability.displayName}
                  onClick={() => {
                    setSelectedAbility(ability);
                    setOpenAbilityModal(true);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    style={{ width: "100%" }}
                    src={ability.displayIcon}
                    alt={ability.displayName}
                  />
                  <h4>{ability.displayName}</h4>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    </Modal>
  );
};

export default AgentModal;
