import {createAsyncThunk} from '@reduxjs/toolkit';
import {SignUp, SignIn, GetProfile} from 'src/public/auth/application';
import {
    UserSignInService,
    UserSignUpService,
    UserGetProfileService,
} from 'src/public/auth/infastructure/service';

const signUp = createAsyncThunk(
    'user/signUp',
    async (data: object, {rejectWithValue}: {rejectWithValue: any}) => {
        const service = new UserSignUpService();
        const interactor = new SignUp(service);
        const signUpResult = await interactor.signUpService.signUp(data);
        if (signUpResult.isSuccess) {
            return signUpResult;
        }
        return rejectWithValue(signUpResult);
    },
);
const signIn = createAsyncThunk(
    'user/signIn',
    async (data: object, {rejectWithValue}: {rejectWithValue: any}) => {
        const service = new UserSignInService();
        const interactor = new SignIn(service);
        const signinResult = await interactor.signInService.signIn(data);
        if (signinResult.isSuccess) {
            return signinResult;
        }
        return rejectWithValue(signinResult);
    },
);
const getProfile = createAsyncThunk(
    'user/getProfile',
    async (data: object, {rejectWithValue}: {rejectWithValue: any}) => {
        const service = new UserGetProfileService();
        const interactor = new GetProfile(service);
        const signinResult = await interactor.getProfileService.getProfile(
            data,
        );
        if (signinResult.isSuccess) {
            return signinResult;
        }
        return rejectWithValue(signinResult);
    },
);

export {signUp, signIn, getProfile};
