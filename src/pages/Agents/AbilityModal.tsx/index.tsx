import { Button, Modal } from "antd";
import { AbilityModalProps } from "./AbilityModal.interfaces";

const AbilityModal = ({
  open,
  onCancel,
  selectedAbility,
}: AbilityModalProps) => (
  <Modal
    open={open}
    onCancel={onCancel}
    title={selectedAbility?.displayName}
    footer={
      <div>
        <Button
          type="text"
          style={{ color: "#2070C7", fontWeight: "bold" }}
          onClick={onCancel}
        >
          Fechar
        </Button>
      </div>
    }
  >
    <img
      style={{ width: "100px" }}
      src={selectedAbility?.displayIcon}
      alt={selectedAbility?.displayName}
    />
    <h1>{selectedAbility?.displayName}</h1>
    <p>{selectedAbility?.description}</p>
  </Modal>
);

export default AbilityModal;
