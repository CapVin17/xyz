"use client"

import Button from '../components/Button';

export default function Nav()
{
    return (
      <div className="h-auto w-full text-xl bg-blue-500 flex justify-between flex-row">
        <div className="text-4xl text-white p-5">ShopWave</div>
        <div className="flex p-5">
          <Button name={"Home"} redirect='/' />
          <Button name={"Cart"} redirect='/cart'/>
          <Button name={"Sign Up"} />
          <Button name={"Login"} />
        </div>
      </div>
    );
}