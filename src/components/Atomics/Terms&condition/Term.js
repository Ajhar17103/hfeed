import { Link } from "react-router-dom";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import BlogFeed from "../../Blog/BlogFeed";
import ThinFooter from "../../Footer/ThinFooter";

function Terms() {
    return (
        <>
            <ContentWrapper>
				<Container fluid>
					<section className="blog-page section-padding">
						<Container>
							<Row>
							 <BlogFeed/>
							</Row>
						</Container>
					</section>
				</Container>
				 <ThinFooter/>
			</ContentWrapper>
        </>
    )
}

export default Terms;
