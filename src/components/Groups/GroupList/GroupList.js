import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import Sorting from "components/Commons/Sorting";
import Button from "components/Commons/Button";
import ScrollGroupListContainer from "containers/Groups/ScrollGroupListContainer";
import ContentBox from "components/Commons/ContentBox";
import group_bg from "source/group_bg.jpg";
import StyleGuide from "StyleGuide";

// css styling

const Wrapper = styled.div`
  width: 100%;
`;

const Content = styled(ContentBox)`
  @media only screen and (max-width: 991px) and (min-width: 768px){
    & .ui.grid>.row{
      margin-left: 6.25% !important;
    }
  }
`;

const MenuContainer = styled(Grid)`
  & .sorting {
    text-align: right;
    line-height: 50px;
  }
  & .addGroup {
    line-height: 50px;
  }
  & .addGroup button{
    padding: 5px 18px;
    font-size: 14px;
    border: 1px solid rgba(25,25,25,0.2);
    font-weight: 400;
    background-color: #fff;
    border-radius: 5px;
  }
  & .addGroup button:hover {
    background-color: #f2f2f2;
  }
  & .ui.default.dropdown:not(.button)>.text,
  & .ui.dropdown:not(.button)>.default.text {
    color: inherit;
  }
  &.ui.grid > .row {
    padding-top: 0rem;
    padding-bottom: 0rem;
  }
`;

const Title = styled.div`
  width: 100%;
  color: white;
  position: absolute;
  text-align: center;
  top: 50%;
  left: 0;
  z-index: 2;
  transform: translateY(-50%);
  h1{
    color: ${StyleGuide.color.geyScale.scale0};
    font-size: 2.5rem;
    font-weight: bold;
  }
`;

const ImgWrapper = styled.div`
  background-image: url(${group_bg});
  background-position: center 15%;
  background-size: cover;
  width: 100%;
  height: 200px;
  position: relative;
  &::after{
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1;
  }
`;

const MenuWrap = styled.div`
  background-color: white;
  border-top: 1px solid rgba(0,0,0,0.2);
  box-shadow: 0 1px 1px 1px ${StyleGuide.color.geyScale.scale3};
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  z-index: 3;
`;

const Head = styled.div`
  padding-top: 80px;
  padding-bottom: 2rem;
  font-size: ${StyleGuide.font.size.paragraph};
`;

class GroupList extends Component {
  state = {
    rendering: true
  }

  componentDidMount(){
    this.props.GetGroupTotalCountRequest();
  }

  changeState = async () => {
    await this.setState({
      rendering: false
    });
    await this.setState({
      rendering: true
    });
  }

  sortChange = (e, { value }) => {
    this.props.history.replace(`/group/${value}`);
    this.changeState();
  }

  render(){
    const { sort } = this.props;
    const Header = () => {
      return (
        <Head>
          <span>그룹 ({this.props.Count})</span>
        </Head>
      );
    };

    return(
      <div>
        <MenuWrap>
          <Content>
            <Wrapper>
              <MenuContainer devided="vertically" padded={true} columns={2}>
                <Grid.Row stretched={false}>
                  <Grid.Column className="addGroup">
                    <Link to="/createGroup"><button>그룹 등록</button></Link>
                  </Grid.Column>
                  <Sorting handleChange={this.sortChange} placeholder={sort}/>
                </Grid.Row>
              </MenuContainer>
            </Wrapper>
          </Content>
        </MenuWrap>
        <Content>
          <Header/>
          <Wrapper className="listWrap">
            {this.state.rendering && <ScrollGroupListContainer sort={sort} history={this.props.history}/>}
          </Wrapper>
        </Content>
      </div>
    );
  }
}

export default GroupList;
