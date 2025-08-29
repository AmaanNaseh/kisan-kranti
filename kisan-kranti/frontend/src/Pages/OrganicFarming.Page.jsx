import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";

const OrganicFarmingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [lang, setLang] = useState(0);

  const [engUrl, setEngUrl] = useState("");
  const [hindiUrl, setHindiUrl] = useState("");

  return (
    <>
      <div className="min-h-[100vh] my-12 md:my-20">
        <div>
          <h1 className="font-bold text-5xl text-center my-2">
            Learn Organic Farming
          </h1>
          <div className="flex flex-row justify-around items-center mx-auto my-7">
            <button
              className="text-center font-semibold text-3xl p-3 rounded-lg bg-gradient-to-t from-green-300 via-transparent to-orange-300 hover:bg-gradient-to-r"
              onClick={() => {
                setLang(1);
              }}
            >
              हिन्दी
            </button>
            <button
              className="text-center font-semibold text-3xl p-3 bg-blue-400 hover:bg-blue-300 rounded-lg"
              onClick={() => {
                setLang(2);
              }}
            >
              English
            </button>
          </div>
        </div>

        {lang === 0 ? (
          <h1 className="font-bold text-2xl text-center my-2">
            Please select language
          </h1>
        ) : (
          ""
        )}

        {lang === 1 ? (
          <div className="flex flex-col md:flex-row gap-4 my-12">
            <div className="md:w-[20%]">
              <h1 className="font-bold text-4xl text-center my-2">Content</h1>
              <hr />
              <div className="flex flex-col items-center justify-center">
                <button
                  className="text-1xl font-bold p-2 hover:text-2xl"
                  onClick={() => {
                    setHindiUrl(
                      "https://youtu.be/uBn1CkK8giE?si=H0SbOCPmAuIDb0kF"
                    );
                  }}
                >
                  Introduction
                </button>
              </div>
              <div className="flex flex-row gap-5 ml-7">
                <div className="flex flex-col flex-wrap items-center justify-center my-2 gap-2">
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://youtu.be/3aw7nrsUKW0?si=11sWG-75F1mJ-b-9"
                      );
                    }}
                  >
                    Episode 1
                  </button>
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://youtu.be/VndcqwV15zs?si=dx7nA5gX-hU7okRd"
                      );
                    }}
                  >
                    Episode 2
                  </button>
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://youtu.be/VCjb_XLPczY?si=18iylQ2Iv65OYyLz"
                      );
                    }}
                  >
                    Episode 3
                  </button>
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://youtu.be/4qOHYo0Db6s?si=o5H0MpgyDjvNpFMz"
                      );
                    }}
                  >
                    Episode 4
                  </button>
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://youtu.be/hqEdncLIwAs?si=DhzajIqSK_1XXelx"
                      );
                    }}
                  >
                    Episode 5
                  </button>
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://youtu.be/bK16mq1eE-I?si=GvdWVJRUbE1Bia_4"
                      );
                    }}
                  >
                    Episode 6
                  </button>
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://youtu.be/egMiTEqwF-A?si=F3d2y9vA-nOsK0z8"
                      );
                    }}
                  >
                    Episode 7
                  </button>
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://youtu.be/2laJZtR_csQ?si=hW435YI0aEgsT9Zk"
                      );
                    }}
                  >
                    Episode 8
                  </button>
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://youtu.be/jLLtjiaRfKQ?si=aLBVRgFpXPFhsJFW"
                      );
                    }}
                  >
                    Episode 9
                  </button>
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://youtu.be/76x-sJjZQ24?si=gi7YZN36Nc79Rpz9"
                      );
                    }}
                  >
                    Episode 10
                  </button>
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://youtu.be/X2QiNjyjbGQ?si=2MS79b_eUMHzoyRP"
                      );
                    }}
                  >
                    Episode 11
                  </button>
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://youtu.be/GhHEJXGfcJQ?si=w3i3vCykktUk1Vvx"
                      );
                    }}
                  >
                    Episode 12
                  </button>
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://youtu.be/9W_WG1KTP7s?si=LR0y_Pi6tpH5WfA8"
                      );
                    }}
                  >
                    Episode 13
                  </button>
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://youtu.be/sIB3JdSeHlg?si=qav4Iy-RgkTTIO1-"
                      );
                    }}
                  >
                    Episode 14
                  </button>
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://youtu.be/iEbh36bknx8?si=R4i7HeZa2hhMWsCi"
                      );
                    }}
                  >
                    Episode 15
                  </button>
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://youtu.be/tQeFrg933zk?si=qKk6mMZLEvI1qMN_"
                      );
                    }}
                  >
                    Episode 16
                  </button>
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://youtu.be/chW3DrLyVGs?si=t69TjAYeXwn1W4NO"
                      );
                    }}
                  >
                    Episode 17
                  </button>
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://youtu.be/3PMfC4psUo8?si=Ghi9kG5i6n-ejDjJ"
                      );
                    }}
                  >
                    Episode 18
                  </button>
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://youtu.be/fLE3WKDzSeo?si=_9iLGdp4rKvYRUjX"
                      );
                    }}
                  >
                    Episode 19
                  </button>
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://youtu.be/kG11N9jMxLg?si=5shqnb8118pudcem"
                      );
                    }}
                  >
                    Episode 20
                  </button>
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://youtu.be/YIwM6OY8rD8?si=UmZnSkaMMoMCKm_i"
                      );
                    }}
                  >
                    Episode 21
                  </button>
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://youtu.be/2pSz3W7vvys?si=7IpQIMmWRlBGV4NA"
                      );
                    }}
                  >
                    Episode 22
                  </button>
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://youtu.be/2dsU1xWn7OQ?si=FRkkhV9hweGdwKgH"
                      );
                    }}
                  >
                    Episode 23
                  </button>
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://youtu.be/vt96uG-P0Tg?si=rrhiZDSKnbSYvvdK"
                      );
                    }}
                  >
                    Episode 24
                  </button>
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://youtu.be/qlS3YmoC4oM?si=324D3v209IPOwQIT"
                      );
                    }}
                  >
                    Episode 25
                  </button>
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://youtu.be/uGe_qmpHo3w?si=brPoAnbc_aq-g9Pz"
                      );
                    }}
                  >
                    Episode 26
                  </button>
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://youtu.be/ypLnCEwmArU?si=fI6TfV7JdhhQ-duc"
                      );
                    }}
                  >
                    Episode 27
                  </button>
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://youtu.be/uLKCHMqr0s0?si=3-ANllx2YcMQWWeh"
                      );
                    }}
                  >
                    Episode 28
                  </button>
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://youtu.be/4pVTZdXd4xE?si=kJdZLPJfnW72YZfz"
                      );
                    }}
                  >
                    Episode 29
                  </button>
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://youtu.be/x8B20o8EcVM?si=i4NdSg2LfJMqCV8s"
                      );
                    }}
                  >
                    Episode 30
                  </button>
                </div>
                <div className="flex flex-col flex-wrap items-center justify-center my-2 gap-2">
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://youtu.be/GqZIDgj9dz4?si=aUY8vTpM8lPwPtQg"
                      );
                    }}
                  >
                    Episode 31
                  </button>
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://youtu.be/oFlfdFQBwk8?si=r9qle2Uclm4bQbAn"
                      );
                    }}
                  >
                    Episode 32
                  </button>
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://youtu.be/6zv_2AWG3z8?si=QbHysJjcaFjUM3wn"
                      );
                    }}
                  >
                    Episode 33
                  </button>
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://youtu.be/oy7C171rwvA?si=J3JpRoa66Kjed7Vw"
                      );
                    }}
                  >
                    Episode 34
                  </button>
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://youtu.be/mNwHcQsiH-w?si=ineKSTFQedLmP3x9"
                      );
                    }}
                  >
                    Episode 35
                  </button>
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://youtu.be/6aYFkdmyWpc?si=xhV-ra6vL_cj0IGD"
                      );
                    }}
                  >
                    Episode 36
                  </button>
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://youtu.be/ORODIFaUTC0?si=F0xYb83lXMhjwJ7V"
                      );
                    }}
                  >
                    Episode 37
                  </button>
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://youtu.be/LguIBAVGVSA?si=lDhXIjreqV-H9MLj"
                      );
                    }}
                  >
                    Episode 38
                  </button>
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://youtu.be/BhDoEmz4UOE?si=wmzdV0OQtiTien56"
                      );
                    }}
                  >
                    Episode 39
                  </button>
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://youtu.be/G8tGXNdhT8Q?si=Cwd-CeOQd846dyZP"
                      );
                    }}
                  >
                    Episode 40
                  </button>
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://youtu.be/h2a2ihQWz60?si=K86G1K11fzjWkie2"
                      );
                    }}
                  >
                    Episode 41
                  </button>
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://youtu.be/HIX5V7rpQRc?si=qFWMS1Lay1e0yX39"
                      );
                    }}
                  >
                    Episode 42
                  </button>
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://youtu.be/GeEUQWj5Jo4?si=-pSkAb0fr62ie9H2"
                      );
                    }}
                  >
                    Episode 43
                  </button>
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://youtu.be/pJPb4NbtV9A?si=qHUW2lVmfOyzcLnJ"
                      );
                    }}
                  >
                    Episode 44
                  </button>
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://youtu.be/J6NJtrwX27E?si=Nwbn9iEvcJqoR4Gv"
                      );
                    }}
                  >
                    Episode 45
                  </button>
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://youtu.be/TwSZwN32B8M?si=AH7qKw4Oo9z_oDp1"
                      );
                    }}
                  >
                    Episode 46
                  </button>
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://www.youtube.com/live/2HqE0SeswTI?si=wbyF4MlEhyqGyVBU"
                      );
                    }}
                  >
                    Episode 47
                  </button>
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://www.youtube.com/live/QhSuz7ILrrU?si=0k9qHeRFZ4zgmFdF"
                      );
                    }}
                  >
                    Episode 48
                  </button>
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://www.youtube.com/live/f_GHuV4Darg?si=y1O_P2Us1ocIJWXv"
                      );
                    }}
                  >
                    Episode 49
                  </button>
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://www.youtube.com/live/dj0hPi0s85I?si=E-J4Ea0MXYlVtYT0"
                      );
                    }}
                  >
                    Episode 50
                  </button>
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://youtu.be/gBJkhLICr7M?si=gkrKve0Ma2D9N2Fi"
                      );
                    }}
                  >
                    Episode 51
                  </button>
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://www.youtube.com/live/VwwRY02NAmM?si=iyFgNUt9V2X_5Hit"
                      );
                    }}
                  >
                    Episode 52
                  </button>
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://www.youtube.com/live/XTHhv6VR0PM?si=WFd_0hnv6_nja7bT"
                      );
                    }}
                  >
                    Episode 53
                  </button>
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://www.youtube.com/live/gqREJnCn6TU?si=7Daac4cGzxfwlUVe"
                      );
                    }}
                  >
                    Episode 54
                  </button>
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://www.youtube.com/live/SY6ej83YK74?si=LaVq_z1bgu-zQQR4"
                      );
                    }}
                  >
                    Episode 55
                  </button>
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://youtu.be/B_jaKES2MDE?si=o1qnY02sdvvNXyov"
                      );
                    }}
                  >
                    Episode 56
                  </button>
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://youtu.be/7haxdvqbn7Y?si=UkoR0vFcc_uJ_Zqp"
                      );
                    }}
                  >
                    Episode 57
                  </button>
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://youtu.be/CgMFbx9d_jE?si=gfz_ENlRLwAuf8w_"
                      );
                    }}
                  >
                    Episode 58
                  </button>
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://youtu.be/irr-ofS5G8s?si=0vPuVAtE_cwBXQAs"
                      );
                    }}
                  >
                    Episode 59
                  </button>
                  <button
                    className="text-1xl font-bold p-2 hover:text-2xl"
                    onClick={() => {
                      setHindiUrl(
                        "https://youtu.be/rjyLgTAiMPQ?si=Y6bxM8MGRiEVyE3k"
                      );
                    }}
                  >
                    Episode 60
                  </button>
                </div>
              </div>
            </div>
            <div className="md:w-[75%]">
              {hindiUrl === "" ? (
                <h1 className="font-bold text-2xl text-center my-[15%] translate-y-[-15%]">
                  Please select episode
                </h1>
              ) : (
                <div className="flex flex-col justify-center items-center my-8 ml-3 w-[350px] h-[250px] md:ml-7 md:w-[520px] md:h-[380px] lg:ml-10 lg:w-[1080px] lg:h-[720px]">
                  <ReactPlayer url={hindiUrl} width={"100%"} height={"100%"} />
                </div>
              )}
            </div>
          </div>
        ) : (
          ""
        )}

        {lang === 2 ? (
          <div className="flex flex-col md:flex-row gap-4 my-12">
            <div className="md:w-[20%]">
              <h1 className="font-bold text-4xl text-center my-2">Content</h1>
              <hr />
              <div className="flex flex-col flex-wrap items-center justify-center my-2 gap-2">
                <button
                  className="text-1xl font-bold p-2 hover:text-2xl"
                  onClick={() => {
                    setEngUrl(
                      "https://youtu.be/lRyXlvIJFWI?si=l0FYgM3-_EEHohBj"
                    );
                  }}
                >
                  Introduction
                </button>
                <button
                  className="text-1xl font-bold p-2 hover:text-2xl"
                  onClick={() => {
                    setEngUrl(
                      "https://youtu.be/2F74xw1VK8E?si=mk8DtHZI4OeS8OQu"
                    );
                  }}
                >
                  episode 1
                </button>
                <button
                  className="text-1xl font-bold p-2 hover:text-2xl"
                  onClick={() => {
                    setEngUrl(
                      "https://youtu.be/SPFYG-RhbOo?si=GignVq4f3uhv_KJE"
                    );
                  }}
                >
                  episode 2
                </button>
                <button
                  className="text-1xl font-bold p-2 hover:text-2xl"
                  onClick={() => {
                    setEngUrl(
                      "https://youtu.be/Kn_rlpyRCZs?si=nQ6CH2F9fLDe-VMG"
                    );
                  }}
                >
                  episode 3
                </button>
                <button
                  className="text-1xl font-bold p-2 hover:text-2xl"
                  onClick={() => {
                    setEngUrl(
                      "https://youtu.be/-ew94CqEijM?si=TLv61wObgjNST5XJ"
                    );
                  }}
                >
                  episode 4
                </button>
                <button
                  className="text-1xl font-bold p-2 hover:text-2xl"
                  onClick={() => {
                    setEngUrl(
                      "https://youtu.be/akFZp5kAuNQ?si=ENdjF5HTW4QgglXa"
                    );
                  }}
                >
                  episode 5
                </button>
                <button
                  className="text-1xl font-bold p-2 hover:text-2xl"
                  onClick={() => {
                    setEngUrl(
                      "https://youtu.be/7oe0F_wRUm4?si=i6jGx7mC0ckX3bNM"
                    );
                  }}
                >
                  episode 6
                </button>
                <button
                  className="text-1xl font-bold p-2 hover:text-2xl"
                  onClick={() => {
                    setEngUrl(
                      "https://youtu.be/sxmT4CdCkFs?si=VjlMg3MOU_QUl2nK"
                    );
                  }}
                >
                  episode 7
                </button>
                <button
                  className="text-1xl font-bold p-2 hover:text-2xl"
                  onClick={() => {
                    setEngUrl(
                      "https://youtu.be/7G0_i_r1BF8?si=fOcnUFcjEiUSUKsa"
                    );
                  }}
                >
                  episode 8
                </button>
                <button
                  className="text-1xl font-bold p-2 hover:text-2xl"
                  onClick={() => {
                    setEngUrl(
                      "https://youtu.be/bOz2J9c0mVE?si=Zi67yvV1cV72KlOC"
                    );
                  }}
                >
                  episode 9
                </button>
              </div>
            </div>
            <div className="md:w-[75%]">
              {engUrl === "" ? (
                <h1 className="font-bold text-2xl text-center my-[15%] translate-y-[-15%]">
                  Please select episode
                </h1>
              ) : (
                <div className="flex flex-col justify-center items-center my-8 ml-3 w-[350px] h-[250px] md:ml-7 md:w-[520px] md:h-[380px] lg:ml-10 lg:w-[1080px] lg:h-[720px]">
                  <ReactPlayer url={engUrl} width={"100%"} height={"100%"} />
                </div>
              )}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default OrganicFarmingPage;
