//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import {Formik} from 'formik';
import {Input, Button, Toggle} from '@ui-kitten/components';
import * as Yup from 'yup';
// create a component
const FormExample = () => {
  const registerSchema = Yup.object().shape({
    name: Yup.string().required('must be entered'),
    surname: Yup.string().required('must be entered'),
    email: Yup.string()
      .required('must be entered')
      .email('Please enter valid email address.'),
    phone: Yup.string()
      .required('must be entered')
      .min(11, 'Min 11 characters')
      .max(13, 'Max 13 characters'),
    password: Yup.string()
      .required('must be entered')
      .matches(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$',
        'invalid password',
      ),

    //Yukarıdaki regex şifre yapısını aşağıdaki kriterleri sağlayan şifreleri sağlamalıdır:
    //En az bir küçük harf içermeli ([a-z])
    //En az bir büyük harf içermeli ([A-Z])
    //En az bir rakam içermeli (\d)
    //En az bir özel karakter içermeli ([@$!%*?&])
    //Toplam uzunluğu en az 8 karakter olmalı ({8,})
    //Örnek şifreler:
    //Abc1s23@
    //P@ssw0rd
    //StrongPwd2022!

    passwordConfirm: Yup.string()
      .required('must be entered')
      .oneOf([Yup.ref('password')], "passwords don't match"),
    agreementConfirm: Yup.bool()
      .required('must be entered')
      .oneOf([true], 'You have to confirm.'),
  });
  return (
    <View style={styles.container}>
      <View
        style={{
          padding: 20,
          backgroundColor: '#06e096',
          minHeight: 125,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
          REGISTER
        </Text>
      </View>
      <View style={{flex: 1, padding: 10}}>
        <ScrollView>
          <Formik
            initialValues={{
              name: '',
              surname: '',
              email: '',
              phone: '',
              password: '',
              passwordConfirm: '',
              agreementConfirm: false,
            }}
            validationSchema={registerSchema}
            onSubmit={values => alert(JSON.stringify(values, 0, 2))}>
            {({handleChange, handleSubmit, values, setFieldValue, errors}) => (
              <View>
                <Input
                  size="large"
                  style={{marginVertical: 10}}
                  value={values.name}
                  label={'Name'}
                  placeholder="Enter your name"
                  onChangeText={handleChange('name')}
                  status={errors.name ? 'danger' : 'basic'}
                  caption={errors.name}
                />
                <Input
                  size="large"
                  style={{marginVertical: 10}}
                  value={values.surname}
                  label={'Surname'}
                  placeholder="Enter your surname"
                  onChangeText={handleChange('surname')}
                  status={errors.surname ? 'danger' : 'basic'}
                  caption={errors.surname}
                />
                <Input
                  size="large"
                  style={{marginVertical: 10}}
                  value={values.phone}
                  label={'Phone'}
                  placeholder="Enter your phone number"
                  onChangeText={handleChange('phone')}
                  status={errors.phone ? 'danger' : 'basic'}
                  caption={errors.phone}
                />
                <Input
                  size="large"
                  style={{marginVertical: 10}}
                  value={values.email}
                  label={'E-mail'}
                  placeholder="Enter your E-mail"
                  onChangeText={handleChange('email')}
                  status={errors.email ? 'danger' : 'basic'}
                  caption={errors.email}
                />
                <Input
                  secureTextEntry={false}
                  size="large"
                  style={{marginVertical: 10}}
                  value={values.password}
                  label={'Password'}
                  placeholder="Enter your password"
                  onChangeText={handleChange('password')}
                  status={errors.password ? 'danger' : 'basic'}
                  caption={errors.password}
                />
                <Input
                  size="large"
                  style={{marginVertical: 10}}
                  value={values.passwordConfirm}
                  label={'Password Confirm'}
                  placeholder="Enter your Password Again"
                  onChangeText={handleChange('passwordConfirm')}
                  status={errors.passwordConfirm ? 'danger' : 'basic'}
                  caption={errors.passwordConfirm}
                />
                <View>
                  <Toggle
                    checked={values.agreementConfirm}
                    onChange={value =>
                      setFieldValue('agreementConfirm', value)
                    }>
                    I accept the user agreement and privacy policy.
                  </Toggle>
                  {errors.agreementConfirm && (
                    <Text style={{color: 'red'}}>
                      {errors.agreementConfirm}
                    </Text>
                  )}
                </View>
                <Button
                  status="success"
                  style={{marginTop: 30}}
                  onPress={handleSubmit}>
                  SAVE
                </Button>
              </View>
            )}
          </Formik>
        </ScrollView>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default FormExample;
