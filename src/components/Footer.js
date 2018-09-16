import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Footer extends Component {
  render() {
    return (
      <div className="row" id="footer">
        <div className="col-7 col-sm-4">
          <p>
            <a href="mailto:hello@engyinlabs.com">
               hello@engyinlabs.com
            </a>
          </p>
        </div>
        <div className="col-5 col-sm-4">
          <p>
            <a href="https://twitter.com/engyinlabs">
              <FontAwesomeIcon icon={['fab','twitter']} />
            </a>
            <a href="https://www.linkedin.com/company/engyinlabs/">
              <FontAwesomeIcon icon={['fab','linkedin-in']} />
            </a>
            <a href="https://www.facebook.com/engyinlabs">
              <FontAwesomeIcon icon={['fab','facebook']} />
            </a>
          </p>
        </div>
        <div className="col-12 col-sm-4">
          <p>Copyright &copy; Engyin Labs</p>
        </div>
      </div>
    )
  }
}

export default Footer