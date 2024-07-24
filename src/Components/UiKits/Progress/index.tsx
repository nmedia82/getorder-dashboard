import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import BasicProgress from './BasicProgress'
import StripedProgress from './StripedProgress'
import AnimatedProgress from './AnimatedProgress'
import MultipleBars from './MultipleBars'
import ProgressWithNumber from './ProgressWithNumber'
import CustomProgress from './CustomProgress'
import SmallProgress from './SmallProgress'
import LargeProgress from './LargeProgress'
import CustomHeightProgress from './CustomHeightProgress'

export default function ProgressContainer() {
  return (
    <Container fluid>
        <Row>
            <Col sm={12}>
               <BasicProgress/>
                <Row>
                    <StripedProgress/>
                    <AnimatedProgress/>
                </Row>
                <Row>
                    <MultipleBars/>
                    <ProgressWithNumber/>
                </Row>
                <CustomProgress/>
                <Row>
                    <SmallProgress/>
                    <LargeProgress/>
                </Row>
                <CustomHeightProgress/>
            </Col>
        </Row>
    </Container>
  )
}
