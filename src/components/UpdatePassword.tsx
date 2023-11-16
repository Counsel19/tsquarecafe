"use client";

import { FC, useState } from "react";
import LabledInput from "./LabledInput";
import { Button } from "./ui/Button";

interface UpdatePasswordProps {}
const UpdatePassword: FC<UpdatePasswordProps> = ({}) => {
  const [currentPassword, setCurrentPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  return (
    <div>
      <h4 className="text-lg font-semibold mb-6">Update Password</h4>
      <div className="space-y-4">
        <LabledInput
          labelText="Current Password"
          type="password"
          inputValue={currentPassword}
          handleOnChange={setCurrentPassword}
        />
        <LabledInput
          labelText="New Password"
          type="password"
          inputValue={newPassword}
          handleOnChange={setNewPassword}
        />

        <Button> Change Password</Button>
      </div>
    </div>
  );
};

export default UpdatePassword;
