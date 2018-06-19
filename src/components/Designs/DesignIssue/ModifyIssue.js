import React, { Component } from "react";
import styled from "styled-components";
import { Grid, Header, Form, Button, Radio } from "semantic-ui-react";
import ValidateForm from "components/Commons/ValidateForm";
import { FormInput, FormTextArea} from "components/Commons/FormItem";
import { FormField } from "components/Commons/FormField";
import FormDataToJson from "modules/FormDataToJson";

// css styling
const FromFieldCard = styled.div`
  width: 100%;
  background-color: white;
  box-shadow: 3px 3px 3px rgba(0,0,0,0.3);
  padding: 40px;
  margin-bottom: 30px;
`;

const FormHeader = styled(Header)`
  position: relative;
  padding-right: 2.5rem !important;
  &::after{
    position: absolute;
    display: block;
    right: 2rem;
    content: "";
    height: 20px;
    border-right: 3px solid #191919;
    top: 50%;
    transform: translateY(-50%);
  }
`;

class ModifyIssue extends Component {
  state = {
    title: this.props.IssueDetail.title,
    content: this.props.IssueDetail.content
  }

  componentDidUpdate(nextProps) {
    if (JSON.stringify(this.props.IssueDetail) !== JSON.stringify(nextProps.IssueDetail)) {
      this.setState({
        title: this.props.IssueDetail.title,
        content: this.props.IssueDetail.content
      });
    }
  }

  setComplete = () => {
    this.setState({
      complete: !this.state.complete
    });
  }
  
  onSubmitForm = (data) => {
    this.props.UpdateDesignIssueRequest(FormDataToJson(data), this.props.match.params.id, this.props.match.params.issue_id, this.props.token)
    .then(data => {
      this.props.history.push(`/designDetail/${this.props.match.params.id}/issue`);
    });
  }

  render(){
    const data = this.props.IssueDetail;

    return(
      <ValidateForm onSubmit={this.onSubmitForm}>
        <FromFieldCard>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column width={4}>
                <FormHeader as="h2">이슈 수정</FormHeader>
              </Grid.Column>
              <Grid.Column width={12}>
                <FormField name="title" label="이슈 제목" type="text" value={this.state.title}
                          validates={["required"]} RenderComponent={FormInput} />
                <FormField name="content" label="내용" value={this.state.content}
                          validates={["required"]} RenderComponent={FormTextArea} />
                <Button type="submit" onClick={this.props.handleClick}>등록</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </FromFieldCard>
      </ValidateForm>
    );
  }
}

export default ModifyIssue;