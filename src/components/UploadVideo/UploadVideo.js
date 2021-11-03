import "./UploadVideo.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";

import ThinFooter from "../Footer/ThinFooter";
import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";
import { HeadingWrapper } from "../Atomics/SectionHeader/SectionHeader";

import VideoUploadForm from "./VideoUploadForm";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const UploadVideo = () => {
	return (
		<>
			<ContentWrapper>
				<Container fluid className="upload-details">
					<Row>
						<Col lg={12}>
							<HeadingWrapper heading="Upload Details" />
						</Col>
						<Col lg={2}>
							<div    > <input type="file"  style={{}}  /></div>
						</Col>

						<Col lg={10}>
							<div className="osahan-title">
								Contrary to popular belief, Lorem Ipsum (2020)
								is not.
							</div>
							<div className="osahan-size">
								102.6 MB . 2:13 MIN Remaining
							</div>
							<div className="osahan-progress">
								<ProgressBar striped animated now={75} />

								<div className="osahan-close">
									<a href="#">
										<FontAwesomeIcon icon={faTimesCircle} />
									</a>
								</div>
							</div>
							<div className="osahan-desc">
								Your Video is still uploading, please keep this
								page open until it's done.
							</div>
						</Col>
					</Row>
					<hr />

					<VideoUploadForm />
				</Container>
				<ThinFooter />
			</ContentWrapper>
		</>
	);
};

export default UploadVideo;
