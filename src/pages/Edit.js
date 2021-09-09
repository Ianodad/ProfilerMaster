// eslint-disable-line
import './Edit.css';

import Lottie from 'lottie-react';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as Yup from 'yup';

import usersAction from '../_redux/Actions/usersActions';
import { Form, FormField, SubmitButton } from '../components/Forms';
import MainLayout from '../components/layouts/MainLayout';
import LoadingAnimation from '../lottie/loading.json';

const { getUserFromLocalState, patchUserDetail } = usersAction;

// eslint-disable-next-line no-shadow
function Edit({ getUserFromLocalState, patchUserDetail, userLocal, match }) {
  useEffect(() => {
    getUserFromLocalState(match.params.id);
    console.log(match.params.id);
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
    });
  };
  const { name, occupation, email, bio } = userLocal;
  console.log(name);
  return (
    <MainLayout>
      {name ? (
        <div className="edit-form">
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
            <h2 className="text-center">Edit Profile</h2>

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
            <SubmitButton title="Create" />
          </Form>
        </div>
      ) : (
        <Lottie animationData={LoadingAnimation} />
      )}
    </MainLayout>
  );
}

const mapStateToProps = (state) =>
  // console.log(state);
  ({
    userLocal: state.Profile.localUser,
  });
export default connect(mapStateToProps, { getUserFromLocalState, patchUserDetail })(
  Edit
);