import { useAudio } from "./hooks/useAudio";

import DiscordButton from "./components/DiscordButton";
import LandingLogo from "./assets/LandingLogo.svg";
import MoooAudio from "./assets/mooo_audio.wav";

const Footer = () => {
    return (
        <div className="absolute flex right-0 bottom-0 flex-col items-center w-full bg-white p-8">
            <div className="max-w-5xl w-full">
                <div className="flex justify-between items-center">
                    <img class="Emote_emote__Lckjz" src="https://cdn.betterttv.net/emote/5ff10db95ae5852e4154a2c3/3x.webp" alt="MOOOO, 3x" />
                    <p className="hidden md:block font-black text-6xl tracking-tighter text-[#2B2B2B]">“KEEP ON MOOING”</p>
                    <svg width="181" height="117" viewBox="0 0 181 117" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_107_93)">
                            <path d="M79.2605 37.7831V42.4097C79.2605 46.2651 77.904 48 74.0281 48H72.0902C68.2143 48 66.8578 46.0722 66.8578 42.4097V21.5903C66.8578 17.7349 68.2143 16 72.0902 16H74.0281C77.904 16 79.2605 17.9278 79.2605 21.5903V26.2169H94.9576V37.7831H79.2605ZM21.1232 38.3615L25.7742 12.9157H26.937L31.5879 38.3615H21.1232ZM0 62.6506H16.666L18.6039 51.8554H34.3009L36.2389 62.6506H53.4863L51.3545 52.4337H52.1298C54.8428 59.9518 61.0442 64 71.5089 64H73.4467C87.2059 64 93.9886 56.8675 94.3761 44.7228H95.3451V62.6506H135.46V51.4699H136.041C139.142 59.9518 145.731 64 156.195 64H158.52C173.249 64 181 56.4819 181 42.024V1.3494H163.366V42.7952C163.366 46.2651 162.009 48.1928 158.327 48.1928H156.39C152.513 48.1928 151.351 46.2651 151.351 42.7952V1.3494H133.716V46.0722H112.592V1.3494H94.9576V19.2772H93.9886C93.9886 7.51807 87.7872 0 73.8342 0H71.1212C56.0056 0 49.2229 7.71085 49.2229 21.5903V42.2169C49.2229 42.9879 49.2229 43.7591 49.2229 44.5301H48.6415L40.6961 1.3494H12.7902L0 62.6506Z" fill="#2B2B2B" />
                            <g clip-path="url(#clip1_107_93)">
                                <path d="M5.24 94.6C5.24 81.928 15.544 71.56 28.216 71.56C40.888 71.56 51.256 81.928 51.256 94.6C51.256 107.272 40.888 117.64 28.216 117.64C15.544 117.64 5.24 107.272 5.24 94.6ZM10.808 94.6C10.808 104.2 18.616 112.072 28.216 112.072C37.88 112.072 45.624 104.2 45.624 94.6C45.624 84.936 37.88 77.192 28.216 77.192C18.616 77.192 10.808 84.936 10.808 94.6ZM16.824 94.728C16.824 88.008 22.2 82.696 28.792 82.696C31.352 82.696 34.04 83.464 36.152 85.128C36.728 85.64 36.792 86.408 36.28 86.984L33.208 90.056C32.824 90.44 32.12 90.568 31.672 90.248C30.776 89.608 29.816 89.416 28.792 89.416C25.912 89.416 23.8 91.784 23.8 94.536C23.8 97.416 25.912 99.656 28.792 99.656C29.816 99.656 30.712 99.464 31.608 98.824C32.056 98.504 32.76 98.632 33.144 99.016L36.344 102.216C36.792 102.728 36.792 103.496 36.28 104.008C34.04 105.928 31.544 106.696 28.792 106.696C22.2 106.696 16.824 101.32 16.824 94.728ZM57.577 115.784V114.504C61.289 109.64 70.761 96.776 74.537 91.016C75.369 89.736 76.201 87.944 76.201 86.152C76.201 83.72 74.153 81.544 70.569 81.544C67.945 81.544 65.577 83.4 64.361 84.744C63.849 85.256 63.081 85.256 62.569 84.744L58.665 80.776C58.217 80.392 58.153 79.624 58.601 79.112C58.601 79.112 63.785 72.84 71.401 72.84C80.553 72.84 85.929 78.664 85.929 85.768C85.929 89.16 84.969 91.08 83.433 94.088C81.385 97.736 76.137 104.584 73.129 108.808H84.393C85.033 108.808 85.609 109.384 85.609 110.024V115.784C85.609 116.424 85.033 117 84.393 117H58.793C58.089 117 57.577 116.424 57.577 115.784ZM103.188 117.64C92.756 117.64 86.804 109.256 86.804 95.24C86.804 81.224 92.756 72.84 103.188 72.84C113.62 72.84 119.572 81.224 119.572 95.24C119.572 109.256 113.62 117.64 103.188 117.64ZM103.188 108.36C107.092 108.36 109.268 103.688 109.268 95.24C109.268 86.856 107.092 82.12 103.188 82.12C99.284 82.12 97.108 86.856 97.108 95.24C97.108 103.688 99.284 108.36 103.188 108.36ZM118.557 115.784V114.504C122.269 109.64 131.741 96.776 135.517 91.016C136.349 89.736 137.181 87.944 137.181 86.152C137.181 83.72 135.133 81.544 131.549 81.544C128.925 81.544 126.557 83.4 125.341 84.744C124.829 85.256 124.061 85.256 123.549 84.744L119.645 80.776C119.197 80.392 119.133 79.624 119.581 79.112C119.581 79.112 124.765 72.84 132.381 72.84C141.533 72.84 146.909 78.664 146.909 85.768C146.909 89.16 145.949 91.08 144.413 94.088C142.365 97.736 137.117 104.584 134.109 108.808H145.373C146.013 108.808 146.589 109.384 146.589 110.024V115.784C146.589 116.424 146.013 117 145.373 117H119.773C119.069 117 118.557 116.424 118.557 115.784ZM146.12 111.944C145.736 111.496 145.8 110.792 146.184 110.344L150.216 106.312C150.664 105.864 151.304 105.8 151.816 106.184C151.816 106.184 155.784 109.128 158.856 109.128C161.608 109.128 164.424 106.824 164.424 104.008C164.424 101.192 161.544 98.824 156.808 98.824H153.224C152.584 98.824 152.008 98.248 152.008 97.608V92.296C152.008 91.592 152.584 91.08 153.224 91.08H156.808C161.288 91.08 163.656 88.904 163.656 86.152C163.656 83.4 161.288 81.352 158.536 81.352C155.72 81.352 153.928 82.824 152.968 83.912C152.52 84.424 151.752 84.424 151.24 83.976L147.336 80.136C146.824 79.688 146.888 78.92 147.336 78.472C147.336 78.472 152.584 72.84 159.56 72.84C166.984 72.84 173.384 77.384 173.384 84.552C173.384 89.48 169.672 93.128 166.792 94.472V94.664C169.8 95.944 174.536 99.912 174.536 105.416C174.536 112.392 168.456 117.64 159.624 117.64C151.56 117.64 147.464 113.672 146.12 111.944Z" fill="#2B2B2B" />
                            </g>
                        </g>
                        <defs>
                            <clipPath id="clip0_107_93">
                                <rect width="181" height="117" fill="white" />
                            </clipPath>
                            <clipPath id="clip1_107_93">
                                <rect width="175" height="45" fill="white" transform="translate(3 72)" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    )
}

const Content = () => {
    return (
        <div className="w-full pb-24">
            <div className="max-w-[750px]">
                <div className="flex flex-col items-start gap-4 w-full">
                    <p className="text-6xl font-black">DEFEND THE RIGHTS OF ALL CHATTERS GLOBALLY</p>
                    <p className="text-2xl font-black text-justify">Atrioc Chat Labor Union's goal is simple. Criminal justice, chatter's right to message freely, and chatter's right to vote - these are crucial issues, and we're standing up for our freedoms against a corrupt streamer. Join today and fuel our fight back in Twitch chat, Discord channels, and YouTube comment sections.</p>
                    <DiscordButton theme="light" />
                </div>
            </div>
        </div>
    )
}

function App() {
    const [toggle] = useAudio(MoooAudio);

    return (
        <div className="relative flex flex-col items-center w-full min-h-screen h-full overflow-hidden p-2" >
            <div className="absolute top-0 right-0 -z-50">
                <svg width="565" height="1266" viewBox="0 0 565 1266" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M436.903 465.402C432.443 498.066 420.73 523.98 397.565 546.477C390.28 553.264 383.419 560.468 377.019 568.049C362.327 586.221 362.497 600.516 379.918 616.555C392.005 627.681 406.42 636.545 420.304 645.7C453.419 667.517 476.729 696.199 485.233 734.547C490.464 758.142 490.988 781.902 476.448 804.118C481.911 747.055 451.106 710.897 405.723 682.546C391.016 673.356 376.32 664.095 362.187 654.111C301.138 610.981 298.191 584.892 344.189 527.066C356.591 511.473 370.387 492.665 372.249 474.258C377 427.262 395.869 386.694 417.059 345.403C435.78 308.922 453.436 270.527 462.381 231.015C478.496 159.829 462.098 89.416 443.983 20.0118C442.469 14.2094 441.044 8.38256 438.945 0C478.225 10.8323 490.741 38.283 499.392 68.7011C529.553 174.713 520.068 276.565 468.65 375.32C453.959 403.506 441.126 434.485 436.903 465.402Z" fill="#604A8F" />
                    <path d="M380.197 308.002C379.406 308.083 378.612 308.121 377.817 308.119C368.844 308.119 356.551 304.654 339.786 296.298C322.852 287.87 299.784 297.27 304.586 346.027C305.971 360.089 308.053 374.068 309.913 388.863C287.816 379.4 271.924 361.273 262.748 341.498C259.444 342.28 256.008 342.382 252.661 341.797C249.315 341.211 246.132 339.951 243.317 338.098C240.502 336.245 238.118 333.84 236.319 331.038C234.52 328.236 233.345 325.099 232.871 321.829C232.396 318.559 232.632 315.229 233.564 312.054C234.495 308.878 236.101 305.927 238.279 303.39C240.457 300.854 243.157 298.789 246.207 297.328C249.257 295.867 252.588 295.043 255.985 294.908C257.879 288.511 260.876 282.472 264.849 277.048C257.594 274.511 251.561 269.461 247.907 262.867C244.254 256.274 243.237 248.602 245.054 241.326C246.87 234.049 251.39 227.68 257.747 223.443C264.104 219.205 271.849 217.397 279.494 218.366C280.916 211.867 284.397 205.962 289.45 201.482C294.504 197.001 300.875 194.17 307.67 193.385C314.464 192.6 321.342 193.901 327.336 197.106C333.331 200.31 338.142 205.257 341.093 211.251C346.715 206.669 353.758 204.05 361.094 203.817C368.429 203.583 375.634 205.747 381.552 209.963C387.471 214.178 391.761 220.2 393.736 227.065C395.71 233.93 395.254 241.239 392.442 247.822C398.873 250.927 404.074 256 407.244 262.257C410.414 268.515 411.378 275.612 409.985 282.454C408.593 289.296 404.923 295.503 399.54 300.12C394.158 304.737 387.361 307.506 380.197 308.002Z" fill="#604A8F" />
                    <path d="M1.50277 834.347C14.1105 814.741 30.8551 786.573 41.8803 766.359C52.5844 746.739 50.2756 733.104 46.1136 717.981C68.2333 719.426 80.4297 737.482 89.8724 746.547C135.93 664.488 170.201 576.692 191.733 485.605C202.53 440.36 243.491 405.917 290.02 401.535C294.873 401.079 299.971 403.084 310.822 404.961C295.29 414.079 285.472 419.497 276.014 425.458C224.003 458.248 209.061 497.724 232.409 553.102C245.046 583.074 262.2 611.721 280.67 638.807C326.005 705.286 375.197 769.324 419.292 836.538C477.682 925.544 527.75 1018.9 553.962 1122.39C562.836 1157.43 568.654 1193.15 559.209 1229.11C551.706 1257.65 535.36 1267.91 502.354 1264.78C498.622 1094.47 404.596 963.328 314.975 833.835C303.698 911.508 295.395 990.261 279.778 1067.62C271.382 1109.27 252.468 1149.41 234.42 1188.54C222.549 1214.28 199.451 1219.65 177.606 1209.3C226.205 1021.51 238.982 832.643 205.279 641.25C199.415 647.654 196.376 654.846 192.113 661.27C169.433 695.459 146.967 729.792 123.767 763.64C134.343 767.309 142.849 769.479 142.849 769.479C139.464 786.668 126.231 791.684 106.554 788.433C95.3818 803.417 76.9603 809.246 56.7778 804.658C53.8164 808.938 50.8633 813.218 47.8661 817.478C38.2367 831.188 18.0269 844.38 -9.09124e-06 839.951C0.261721 838.03 0.766462 836.148 1.50277 834.347Z" fill="#604A8F" />
                </svg>
            </div>
            <div className="max-w-5xl w-full pt-6 pb-60">
                <div className="flex justify-between items-center pb-32">
                    <svg width="181" height="64" viewBox="0 0 181 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M79.2605 37.7831V42.4097C79.2605 46.2651 77.904 48 74.0281 48H72.0902C68.2143 48 66.8578 46.0722 66.8578 42.4097V21.5903C66.8578 17.7349 68.2143 16 72.0902 16H74.0281C77.904 16 79.2605 17.9278 79.2605 21.5903V26.2169H94.9576V37.7831H79.2605ZM21.1232 38.3615L25.7742 12.9157H26.937L31.5879 38.3615H21.1232ZM0 62.6506H16.666L18.6039 51.8554H34.3009L36.2389 62.6506H53.4863L51.3545 52.4337H52.1298C54.8428 59.9518 61.0442 64 71.5089 64H73.4467C87.2059 64 93.9886 56.8675 94.3761 44.7228H95.3451V62.6506H135.46V51.4699H136.041C139.142 59.9518 145.731 64 156.195 64H158.52C173.249 64 181 56.4819 181 42.024V1.3494H163.366V42.7952C163.366 46.2651 162.009 48.1928 158.327 48.1928H156.39C152.513 48.1928 151.351 46.2651 151.351 42.7952V1.3494H133.716V46.0722H112.592V1.3494H94.9576V19.2772H93.9886C93.9886 7.51807 87.7872 0 73.8342 0H71.1212C56.0056 0 49.2229 7.71085 49.2229 21.5903V42.2169C49.2229 42.9879 49.2229 43.7591 49.2229 44.5301H48.6415L40.6961 1.3494H12.7902L0 62.6506Z" fill="white" />
                    </svg>
                    <DiscordButton theme="dark" toggle={toggle} />
                </div>
                <Content />
            </div>
            <Footer />
        </div>
    );
}

export default App;