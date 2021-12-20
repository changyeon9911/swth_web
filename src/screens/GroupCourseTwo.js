import * as React from 'react';
import Button from '../components/auth/Button';
import FormBox from '../components/auth/FormBox';
import AuthLayout from '../components/auth/AuthLayout';
import CoursePicker from '../components/CoursePicker';
import { useForm } from 'react-hook-form';

export default function GroupCourseTwo() {
    const {register, getValues} = useForm();
    return(
    <AuthLayout>
      <FormBox>
      <h1>Group Course Two</h1>
      <form>
          <CoursePicker register={{...register("courseTime")}}/>
          <Button type="submit" value="수업 신청하기"/>
      </form>
      </FormBox>
    </AuthLayout>
    )
}