"use client";

import { FC, useState } from "react";
import LabledInput from "./LabledInput";
import { Button } from "./ui/Button";

interface UpdateProfileProps {}

const UpdateProfile: FC<UpdateProfileProps> = ({}) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  return (
    <div>
      <h4 className="text-lg font-semibold mb-6">Update Profile</h4>
      <div className="space-y-4">
        <LabledInput
          labelText="First Name"
          type="text"
          inputValue={firstName}
          handleOnChange={setFirstName}
        />
        <LabledInput
          labelText="Last Name"
          type="text"
          inputValue={lastName}
          handleOnChange={setLastName}
        />
        <LabledInput
          labelText="Email"
          type="text"
          inputValue={email}
          handleOnChange={setEmail}
        />

        <Button>Update Profile</Button>
      </div>
    </div>
  );
};

export default UpdateProfile;
