import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;

    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }

    const activeItem = { ...this.state.activeItem, [name]: value };

    this.setState({ activeItem });
  };

  render() {
    const { toggle, onSave } = this.props;

    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>Nota</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="notas-title">Titulo</Label>
              <Input
                type="text"
                id="notas-title"
                name="titulo"
                value={this.state.activeItem.titulo}
                onChange={this.handleChange}
                placeholder="Ingresar titulo"
              />
            </FormGroup>
            <FormGroup>
              <Label for="notas-descripcion">Descripcion</Label>
              <Input
                type="text"
                id="notas-descripcion"
                name="descripcion"
                value={this.state.activeItem.descripcion}
                onChange={this.handleChange}
                placeholder="Ingresar descripcion"
              />
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  name="completado"
                  checked={this.state.activeItem.completado}
                  onChange={this.handleChange}
                />
                Completado
              </Label>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            onClick={() => onSave(this.state.activeItem)}
          >
            Guardar
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}