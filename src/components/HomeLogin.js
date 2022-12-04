import React from 'react';
import Login from './Login'

function HomeLogin() {
    return (
        <div class="container rounded bg-white mt-5 mb-5">
            <div class="row">
                <div class="col-md-3 border-right">
                    <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" /><span class="font-weight-bold"></span><span class="text-black-50">whatever@mail.com.my</span><span> </span></div>
                </div>
                <div class="col-md-5 border-right">
                    <div class="p-3 py-5">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <h4 class="text-right">Profile Settings</h4>
                        </div>
                        <div class="row mt-2">
                            <div class="col-md-6"><label class="labels">Username: </label><input type="text" class="form-control" value="" /></div>
                            <div class="col-md-6"><label class="labels">Email: </label><input type="text" class="form-control" value="" /></div>
                        </div>
                        <div class="col-md-12"><label class="labels">Birthday: </label><input type="text" class="form-control" value="" /></div>
                        <div class="row mt-3">
                            <div class="col-md-12"><label class="labels">Phone Number: </label><input type="text" class="form-control" value="" /></div>
                            <div class="col-md-12"><label class="labels">Password: </label><input type="text" class="form-control" value="" /></div>
                            <div class="col-md-12"><label class="labels">Address: </label><input type="text" class="form-control" value="" /></div>
                            <div class="col-md-12"><label class="labels">LinkedIn: </label><input type="text" class="form-control" value="" /></div>
                        </div>

                        <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeLogin;