/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-line
import './Edit.css';

import Lottie from 'lottie-react';
import React, { useEffect } from 'react';
import { fadeIn } from 'react-animations'
// import fadeIn from 'react-animations/lib/fade-in'
import { connect } from 'react-redux';
import styled, { keyframes } from 'styled-components';
// import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import usersAction from '../_redux/Actions/usersActions';
import { Form, FormField, SubmitButton } from '../components/Forms';
import MainLayout from '../components/layouts/MainLayout';
import LoadingAnimation from '../lottie/loading.json';

const _ = require('lodash');

const { getUserFromLocalState, patchUserDetail } = usersAction;



// eslint-disable-next-line no-shadow
function Edit({ getUserFromLocalState, patchUserDetail, userLocal, match, history  }) {
  useEffect(() => {
    getUserFromLocalState(match.params.id);
    // console.log(match.params.id);
  }, []);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required().label('Name'),
    occupation: Yup.string().required().label('Occupation'),
    email: Yup.string().required().label('Email'),
    bio: Yup.string().required().label('Bio'),
  });

  const handleEdit = ({ name, occupation, email, bio }) => {
    patchUserDetail(match.params.id, {
      name,
      occupation,
      email,
      bio,
    }, history);
  };
  const { name, occupation, email, bio } = userLocal;
  // console.log(history);

    // Animations for the profile card
    const fadeInAnimation = keyframes`${fadeIn}`;


    const FadeInDiv = styled.div`
    animation: 1.2s ${fadeInAnimation};
  `;
  return (
    <MainLayout>
      {!_.isEmpty(userLocal) ? (
        <FadeInDiv className="edit-form">
          <Form
            // enableReinitialize={true}
            initialValues={{
              name,
              occupation,
              email,
              bio,
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => handleEdit(values)}
          >
            <div className="edit-card-header">
            <a href="#" className="btn btn-info mr-4" onClick={()=>history.goBack()}>
                Back
              </a>
              <h2 className="text-center">Edit Profile</h2>
            </div>

            <FormField
              type="text"
              className="form-control"
              placeholder="name"
              required="required"
              id="name"
            />
            <FormField
              type="email"
              className="form-control"
              placeholder="Email"
              required="required"
              id="email"
            />
            <FormField
              type="text"
              className="form-control"
              placeholder="Occupation"
              required="required"
              id="occupation"
            />
            <FormField
              type="text"
              className="form-control"
              placeholder="Bio"
              required="required"
              id="bio"
            />
            <div className="submit-button text-center mt-4">
            <SubmitButton title="Edit" className="sub-btn btn " style={{ color: "#fff"}}/>
            </div>
          </Form>
        </FadeInDiv>
      ) : (
        <Lottie animationData={LoadingAnimation} />
      )}
    </MainLayout>
  );
}

const mapStateToProps = (state) =>
  // console.log(state);
  ({
    userLocal: state.Profile.user,
  });
export default connect(mapStateToProps, { getUserFromLocalState, patchUserDetail })(
  Edit
);