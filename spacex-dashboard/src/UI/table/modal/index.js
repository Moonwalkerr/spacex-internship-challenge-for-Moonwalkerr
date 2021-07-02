import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModalDesc from "./modalDesc";

const TableModal = (props) => {
  const { mission_name, flight_number, launch_success, details } = props.data;

  function statusFormatter(value) {
    if (value) {
      return "Success";
    } else if (value === false) return "Failure";
    else return "Upcoming";
  }

  function getStatusStyle(value) {
    if (value) {
      return {
        textAlign: "center",
        fontSize: 18,
        borderRadius: 20,
        width: 100,
        backgroundColor: "#DEF7EC",
      };
    } else if (value === false)
      return {
        textAlign: "center",
        fontSize: 18,
        borderRadius: 20,
        width: 100,
        backgroundColor: "#FDE2E1",
      };
    else
      return {
        textAlign: "center",
        fontSize: 18,
        borderRadius: 20,
        width: 100,
        backgroundColor: "yellow",
      };
  }
  return (
    <Modal
      key={flight_number}
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          style={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
          id="contained-modal-title-vcenter"
        >
          <img
            style={{
              height: "80px",
            }}
            src={props.data.links.mission_patch_small}
            alt={"mission-img"}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <h2
                style={{
                  color: "#1F2937",
                  fontSize: 28,
                  display: "flex",
                  alignItems: "flex-start",
                  width: "300px",
                  justifyContent: "space-around",
                  fontFamily: "Inter",
                  fontStyle: "medium",
                  fill: "solid #1F2937",
                }}
              >
                {mission_name}
                <span style={getStatusStyle(launch_success)}>
                  {statusFormatter(launch_success)}
                </span>
              </h2>
              <p
                style={{
                  marginLeft: 30,
                  color: "#374151",
                  fontSize: 17,
                }}
              >
                {props.data.rocket.rocket_name}
              </p>
            </div>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{details}</p>
        {/* Launch Details */}
        <ModalDesc name="Flight Number" data={flight_number} />
        <ModalDesc name="Mission Name" data={mission_name} />
        <ModalDesc name="Rocket Type" data={props.data.rocket.rocket_type} />
        <ModalDesc
          name="Manufacturer"
          data={props.data.rocket.second_stage.payloads[0].manufacturer}
        />
        <ModalDesc
          name="Nationality"
          data={props.data.rocket.second_stage.payloads[0].nationality}
        />
        <ModalDesc
          name="Payload Type"
          data={props.data.rocket.second_stage.payloads[0].payload_type}
        />
        <ModalDesc
          name="Orbit"
          data={props.data.rocket.second_stage.payloads[0].orbit}
        />
        <ModalDesc name="Launch Site" data={props.data.launch_site.site_name} />
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TableModal;
