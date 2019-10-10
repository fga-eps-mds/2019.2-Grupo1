import React, { Component } from 'react'
import './ScriptPage.css';
import { Divider, Paragraph } from 'rsuite';
import camera_icon from '../../assets/images/camera-icon.png';
import user_icon from '../../assets/images/user-icon.png';
import logo from '../../assets/images/vsign.png'
import { Container, Header, Navbar, Nav, Icon } from 'rsuite';
import { Steps } from 'rsuite';
import {
    BrowserRouter as Router,
    withRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import SigningSteps from '../Shared/SigningSteps';



//Modal structure


function relataErro(props){
    props.history.push({
      pathname: `/scriptpage/reportar`,
      state: { modal: true }
    })
  }

export class Script extends Component {
    previousLocation = this.props.location;

  recordVideo(){
      this.props.history.push({
        pathname: "/record"})
  }

  componentWillUpdate(nextProps) {
    let { location } = this.props;

    if (
      nextProps.history.action !== "POP" &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  }
    render() {
        let { location } = this.props;

        let isModal = !!(
        location.state &&
        location.state.modal &&
        this.previousLocation !== location
        );
        return (
            <div >
              <div>

                <div className="show-fake-browser navbar-page">
                  <Container>
                    <Header>
                      <Navbar appearance="inverse">
                        <Navbar.Header>
                          <a className="navbar-brand logo"><img src={logo} alt=''/></a>
                        </Navbar.Header>
                        <Navbar.Body>
                          <Nav pullRight>
                            <Nav.Item icon={<Icon icon="home" />}>Inicio</Nav.Item>
                            <Nav.Item>Meus contratos</Nav.Item>
                            <Nav.Item icon={<Icon icon="cog" />}>Configurações</Nav.Item>
                            <Nav.Item>Sair</Nav.Item>
                          </Nav>
                        </Navbar.Body>
                      </Navbar>
                    </Header>
                  </Container>
                </div>
              </div>
                <SigningSteps history={this.props.history} />
                <div className='cabecalho borda'>
                    <img src={user_icon} alt=''/>
                    <p>Contrato Nº###</p>
                </div>
                <div className='instrucao borda'>
                    <p>Para assinar o contrato você deve ler o roteiro
                        abaixo e gravar um video aqui mesmo na nossa plataforma.
                    </p>
                </div>
                <div className='div'>
                  <Divider />
                </div>
                <div className='roteiro borda'>
                  <div className="tela borda">
                      <h2>Roteiro</h2>
                      <p>(exibir o roteiro aqui)</p>
                  </div>
                  <div className='botoes borda'>
                    <Link to="/record">
                      <button className="gravar borda" onClick={() => this.recordVideo(this.props)}>
                          <p>Próximo</p>
                          <img src={camera_icon} alt="" />
                      </button>
                    </Link>
                    <div>
                        <Switch location={isModal ? this.previousLocation : location}>
                            <div>
                                <button className='erro borda' onClick={() => relataErro(this.props)}>
                                    <p>Reportar erro no texto do roteiro</p>
                                </button>
                            </div>
                        </Switch>
                        {isModal ? <Route path="/scriptpage" component={Modal} /> : null}
                    </div>
                  </div>
                </div>


            </div>
        )
    }
}
function Modal({history }) {

    let back = e => {
      e.stopPropagation();
      history.goBack();
    };
  
    return (
      <div className='modalbk'>
        <div className="modal">
          <h1>Relate o erro encontrado</h1>
          <div>
            <input id='mytext' className='relatar' type='text'/>
          </div>
          <div className='Buttons'>
              <button className='cancelButton' onClick={back}>
                <p>Cancelar</p>
              </button>
              <button className='sendButton' onClick={back}>
                <p>Enviar</p>
              </button>
          </div>
            
        </div>
      </div>
    );
  }
  
  function ScriptPage() {
    return (
      <Router>
        <Route component={Script} />
      </Router>
    );
  }
  
export default withRouter(ScriptPage);