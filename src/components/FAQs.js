import React, { Component } from 'react';
var classNames = require('classnames');


class SingleFAQ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: props.q,
      answer: props.a,
    };
  }
  componentDidMount(){
    document.title = "Engyin Labs | FAQs";
  }
  render(){
    const faqClasses = classNames('col-10', 'offset-1', 'col-md-12', 'offset-md-0', 'faq');
    const qClasses = classNames('faq-question');
    const aClasses = classNames('faq-answer')
    return (
      <div className={faqClasses}>
        <p className={qClasses}>{this.state.question}</p>
        <p className={aClasses}>{this.state.answer}</p>
      </div>
    );
  }
}

class FAQs extends Component {
  render() {
    return (
      <div>
        <div className="row" id="faqs">
          <div class="col-12">
            <h1>FAQs</h1>
          </div>
          <SingleFAQ q='How do I apply?' a={['Please fill out our form ', <a href="/apply">here</a>, '. Once we receive your application, we will schedule an interview with you. The interview will be conducted on phone.']} />
          <SingleFAQ q='How much does the program cost?' a='It’s free.'/>
          <SingleFAQ q='I am not from a partner college, can I apply?' a='Yes.'/>
          <SingleFAQ q='I have a low GPA, can I still apply?' a='Your grades do not matter. We will never ask for them.'/>
          <SingleFAQ q='We have a good idea. Will you fund it as a startup?' a='We promote startup culture among students. We will work with you for 3 months to develop the idea further and guide you through building a prototype. We will closely observe your progress during these 3 months. If found feasible, selected teams will receive an early stage investment up to INR 5 L.'/>
          <SingleFAQ q='Will I be able to keep up with my academics if I enroll?' a='It depends on your time management. Nothing worthwhile was ever accomplished in a comfort zone.'/>
          <SingleFAQ q='Do you guarantee jobs?' a='No, we plan to make you capable enough to get your dream job without any arrangements.'/>
          <SingleFAQ q='Do you provide internships?' a='We need interns but we do not accept applications. We will make an offer to students who perform well.'/>
        </div>
      </div>
    );
  }
}

export default FAQs;