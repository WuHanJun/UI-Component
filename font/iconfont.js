;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-yinliang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M678.569984 354.628608c-2.898944-7.727104-8.73472-13.999104-16.164864-17.391616-6.076416-3.41504-13.274112-4.893696-20.66432-3.729408-17.586176 2.770944-29.575168 19.423232-26.774528 37.19168 1.586176 10.061824 7.575552 18.320384 15.665152 23.092224 31.039488 33.216512 50.143232 77.703168 50.143232 126.763008 0 53.681152-22.890496 101.904384-59.286528 135.862272-6.747136 5.82144-11.02336 14.427136-11.02336 24.0384 0 17.531904 14.212096 31.744 31.745024 31.744 8.97536 0 17.074176-3.730432 22.847488-9.71776 6.161408-3.576832 10.970112-9.237504 13.513728-16.031744 39.776256-43.931648 64.222208-101.956608 64.222208-165.894144C742.791168 456.604672 718.345216 398.590976 678.569984 354.628608z"  ></path>' +
    '' +
    '<path d="M789.633024 238.830592c-5.279744-10.749952-16.3328-18.152448-29.118464-18.152448-17.907712 0-32.425984 14.518272-32.425984 32.427008 0 11.754496 6.254592 22.048768 15.619072 27.73504 54.951936 57.501696 88.880128 135.248896 88.880128 221.06624 0 96.089088-42.518528 182.078464-109.546496 240.768l0.124928 0.145408c-10.517504 5.219328-17.752064 16.063488-17.752064 28.601344 0 17.626112 14.288896 31.915008 31.915008 31.915008 10.4704 0 19.762176-5.042176 25.581568-12.829696 0.280576-0.333824 0.562176-0.667648 0.831488-1.012736l0.080896 0.080896c80.111616-70.1184 130.968576-172.84096 130.968576-287.6672C894.793728 399.910912 854.69696 307.396608 789.633024 238.830592z"  ></path>' +
    '' +
    '<path d="M448.487424 183.721984 289.050624 346.851328 191.880192 346.851328c-41.570304 0-62.021632 22.37952-62.021632 62.032896l0 206.718976c0 39.005184 21.098496 62.042112 62.021632 62.042112l97.171456 0 159.435776 163.109888c45.809664 43.02336 115.52256 24.064 115.52256-47.366144L564.009984 231.07584C564.009984 158.90944 493.427712 141.606912 448.487424 183.721984zM501.989376 761.613312c0 46.959616-20.816896 20.632576-42.176512-0.446464-37.228544-36.745216-93.476864-96.119808-139.710464-145.563648l-86.875136 0c-31.434752 0-41.347072-10.541056-41.347072-41.347072L191.880192 450.22208c0-30.152704 10.559488-41.337856 41.347072-41.337856l87.842816 0c45.993984-49.707008 101.695488-108.972032 138.902528-145.384448 21.117952-20.663296 42.015744-47.586304 42.015744 1.302528C501.989376 365.810688 501.989376 662.644736 501.989376 761.613312z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jiahao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M399.724895 69.418023 624.131836 69.418023 624.131836 399.801638 954.597553 399.801638 954.597553 624.195292 624.131836 624.195292 624.131836 954.581977 399.724895 954.581977 399.724895 624.195292 69.401423 624.195292 69.401423 399.801638 399.724895 399.801638Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-star" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M569.498552 94.591355l110.452601 223.834928 273.26778 40.687678c49.603745 7.397481 65.189721 42.312688 28.735461 80.583317l-199.268416 195.119933 48.854685 284.620339c6.563486 41.200354-33.247218 65.146743-68.225871 41.200354l-249.727645-130.273019L259.392772 963.953416c-34.038234 17.381879-69.038376 6.200212-62.688761-41.458227l47.764863-287.656489L39.10667 435.399391c-39.661302-36.582173-19.049868-69.979818 26.982538-76.094072l281.199427-40.85857c0 0 57.706283-117.0386 110.324688-223.64357C495.927953 23.221888 537.940812 24.269753 569.498552 94.591355z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jiantouxia" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M320 320 234.666667 405.333333 533.333333 704 832 405.333333 746.666667 320 533.333333 533.333333Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-stop" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M128 0l256 0 0 1024-256 0 0-1024Z"  ></path>' +
    '' +
    '<path d="M640 0l256 0 0 1024-256 0 0-1024Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-task02" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M135.17312 331.771904 135.17312 200.706048 266.24 200.706048 266.24 331.771904 135.17312 331.771904Z"  ></path>' +
    '' +
    '<path d="M135.17312 577.532928 135.17312 446.467072 266.24 446.467072 266.24 577.532928 135.17312 577.532928Z"  ></path>' +
    '' +
    '<path d="M135.17312 823.293952 135.17312 692.228096 266.24 692.228096 266.24 823.293952 135.17312 823.293952Z"  ></path>' +
    '' +
    '<path d="M348.167168 331.771904 348.167168 200.706048 888.82688 200.706048 888.82688 331.771904 348.167168 331.771904Z"  ></path>' +
    '' +
    '<path d="M348.167168 577.532928 348.167168 446.467072 888.82688 446.467072 888.82688 577.532928 348.167168 577.532928Z"  ></path>' +
    '' +
    '<path d="M348.167168 823.293952 348.167168 692.228096 888.82688 692.228096 888.82688 823.293952 348.167168 823.293952Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-delete" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M256.010745 810.632471c0 47.14474 38.184671 85.329411 85.329411 85.329411l341.318666 0c47.14474 0 85.329411-38.184671 85.329411-85.329411L767.988232 298.653961 256.010745 298.653961 256.010745 810.632471zM810.653961 170.659845 661.32698 170.659845l-42.664705-42.664705L405.337725 127.995139l-42.664705 42.664705L213.346039 170.659845l0 85.329411 597.307921 0L810.653961 170.659845z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-lianxiren" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M982.650755 739.695862c-52.063773-37.123502-132.331911-17.374716-182.164876-83.627652 0 0-18.62008-20.906146 23.136953-71.870888 41.840944-51.250244 45.315068-132.327818 34.775015-195.223287C847.973426 326.486866 788.960381 284.615223 727.167013 284.615223c-61.358463 0-120.515794 41.87062-131.114177 104.357789-10.307763 62.895469-6.6607 143.973042 35.096333 195.223287 20.906146 25.656333 26.666336 43.784202 27.27418 55.3097 19.11229 6.370081 38.744419 14.941294 56.725956 27.912723 78.849836 56.001455 74.389244 163.835416 71.582315 194.065927l235.444337 0C1022.175957 861.485673 1035.031752 776.787642 982.650755 739.695862z"  ></path>' +
    '' +
    '<path d="M684.109358 710.853977c-17.98256-12.799514-38.8314-19.980054-60.663638-25.858948-56.292074-14.681374-120.112612-18.503423-164.704203-77.544097 0 0-22.816658-25.801642 28.725228-88.868003 51.862181-63.297628 56.117089-163.604148 43.087331-241.149269-12.857842-77.515445-86.058005-129.260969-162.185846-129.260969-75.92318 0-149.211347 51.745525-162.068166 129.260969-13.030781 77.54512-8.80248 177.850617 43.086307 241.149269 51.54291 63.066361 28.695552 88.868003 28.695552 88.868003-44.274366 58.520835-107.573017 62.776765-163.574473 77.139891-22.237467 5.876847-43.49256 13.234419-61.792345 26.263154C-12.175809 756.778936 3.808234 861.485673 3.808234 861.485673l7.181563 0 295.006897 0 62.371536 0 64.081481 0 294.717302 0 5.791913 0C732.959949 861.485673 748.914316 756.778936 684.109358 710.853977z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-flag" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M240.408 924 148.17 924 148.17 100l92.238 0L240.408 924 240.408 924zM875.83 161.492c0 0-58.158 51.284-134.648 51.284-120.542 0-123.254-103.846-263.192-103.846-75.664 0-146.212 35.154-176.09 60.762 0 25.28 0 433.522 0 433.522 42.408-29.39 106.852-60.29 176.572-60.29 132.164 0 150.686 98.778 268.486 98.778 76.082 0 128.876-48.738 128.876-48.738L875.83 161.492 875.83 161.492z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-aixin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M750.155587 103.522772c-108.196211 0-200.75221 66.945715-238.523465 161.669076-37.770232-94.723362-130.323161-161.669076-238.521418-161.669076-141.768841 0-256.694313 114.926496-256.694313 256.694313 0 79.879282 37.112246 149.783375 93.702102 201.584158l401.514653 391.617236 244.565065-235.266281c40.011272-36.421514 77.415161-72.213695 110.182448-105.994056l46.198182-44.442188c57.06774-51.715849 94.272084-127.35762 94.272084-207.498868C1006.850923 218.448244 891.924427 103.522772 750.155587 103.522772z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-password" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M773.022898 437.411211 773.022898 325.525981c0 0-0.030699-261.026992-261.026992-261.026992-260.989129 0-261.019829 261.026992-261.019829 261.026992l0 111.88523-65.276702 0c-25.744337 0-46.614667 20.87033-46.614667 46.614667l0 428.861488c0 25.744337 20.87033 46.614667 46.614667 46.614667l652.600225 0c25.744337 0 46.614667-20.87033 46.614667-46.614667L884.914268 484.025878c0-25.744337-20.87033-46.614667-46.614667-46.614667L773.022898 437.411211 773.022898 437.411211zM549.284161 725.390042l0 98.912777c0 12.872169-10.434653 23.306822-23.306822 23.306822l-27.956725 0c-12.872169 0-23.306822-10.434653-23.306822-23.306822l0-98.912777c-22.181185-12.923334-37.282115-36.729529-37.282115-64.234977 0-41.222867 33.412994-74.603115 74.565253-74.603115 41.159422 0 74.572416 33.380248 74.572416 74.603115C586.605162 688.661535 571.503209 712.467731 549.284161 725.390042M698.457646 437.378465 325.541331 437.378465 325.541331 326.011029c0.415462-31.240515 11.404748-186.94167 186.454576-186.94167 175.056991 0 186.04423 155.701155 186.461739 186.456622L698.457646 437.378465 698.457646 437.378465zM698.457646 437.378465"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zuobiao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 0C335.232 0 192 143.296 192 320 192 625.536 512 1024 512 1024 512 1024 832 625.536 832 320 832 143.296 688.704 0 512 0ZM512 496.64C416.576 496.64 339.2 419.264 339.2 323.84 339.2 228.416 416.576 151.04 512 151.04 607.424 151.04 684.8 228.416 684.8 323.84 684.8 419.264 607.424 496.64 512 496.64Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-wodexuqiuben01" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M801.04665 717.460442c76.580143 32.957623 120.102379 87.919399 116.773564 177.157839-111.242594 0-221.082234 0-330.770426 0-13.254885-71.780837 23.651676-130.515542 102.881159-172.644035-10.961656-33.31885-27.469632-64.686255-29.586852-97.004311-1.260713-19.290345 16.10377-44.220131 32.005948-59.331293 35.772738-33.973766 90.170672-29.772071 124.044154 4.731768C856.378863 611.111299 851.436294 661.47536 801.04665 717.460442z"  ></path>' +
    '' +
    '<path d="M844.265988 227.101321c-0.242524-73.604368-26.66122-99.963713-99.769284-100.013855-158.842705-0.10847-317.700759-0.093121-476.541417-0.008186-74.991971 0.041956-99.837846 24.584931-99.887988 99.172697-0.151449 190.613292-0.084934 381.235794 0.033769 571.857273 0 12.919241-0.38681 26.123984 2.049682 38.690184 6.186909 32.024367 25.972535 56.895825 58.047044 57.802474 97.265254 2.756787 194.656375 0.991584 294.039873 0.991584 2.88163-73.871451 24.534789-137.576355 79.958076-187.29164 6.186909-5.556553 4.976338-23.307845 2.269693-34.175357-24.862247-99.459223 49.121767-193.715957 151.478993-188.680267 28.266787 1.385557 56.047504 12.792351 88.389096 20.659529C844.333526 412.831396 844.567863 319.970452 844.265988 227.101321zM458.248284 730.430848 363.707071 730.430848c-6.65763 0.270153-13.289678 0.405229-19.786649 0l-13.801331 0c-16.878412 0-30.56104-13.68365-30.56104-30.56104 0-16.876366 13.68365-30.56104 30.56104-30.56104l128.129192 0c16.877389 0 30.56104 13.684674 30.56104 30.56104C488.809323 716.747197 475.126696 730.430848 458.248284 730.430848zM534.459013 546.340109 327.547523 546.340109c-17.693987 0-32.04074-14.338566-32.04074-32.023344 0-17.692964 14.346753-32.04074 32.04074-32.04074l206.91149 0c17.691941 0 32.032554 14.347776 32.032554 32.04074C566.491567 532.001543 552.150954 546.340109 534.459013 546.340109zM715.640492 325.770552c0 14.078647-10.379395 25.483394-23.189142 25.483394l-0.101307 0c-6.110161 1.614777-13.111622 2.059915-20.273742 2.051729-111.48614-0.218988-222.956931-0.23536-334.443072 0-6.690376 0.016373-13.06148-0.538259-18.643616-2.051729-12.741185-0.083911-23.063275-11.447726-23.063275-25.483394l0-10.514471c0-14.07967 10.388605-25.476231 23.198352-25.476231l373.325637 0c12.81077 0 23.189142 11.397584 23.189142 25.476231L715.639468 325.770552z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-icsent" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M21.344 515.2l298.752 113.344 95.808 316.672 173.728-224.096 266.272 84.416 146.752-726.752-981.344 436.416zM479.2 661.024l-50.496 177.504-49.184-208.576 623.136-551.168-523.456 582.24z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-weibiaoti9-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 292.205897c80.855572 0 146.358821-65.503248 146.358821-146.358821C658.358821 65.503248 592.855572 0 512 0 431.144428 0 365.641179 65.503248 365.641179 146.358821 365.641179 227.214393 431.144428 292.205897 512 292.205897zM512 731.282359c-80.855572 0-146.358821 65.503248-146.358821 146.358821 0 80.855572 65.503248 146.358821 146.358821 146.358821 80.855572 0 146.358821-65.503248 146.358821-146.358821C658.358821 796.273863 592.855572 731.282359 512 731.282359z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-inbox" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M1007.339361 492.666887 848.662828 124.664078c-4.443615-11.119546-12.546267-20.448103-24.33364-27.999681-11.771027-7.563253-23.436977-11.334372-34.990844-11.334372L234.670996 85.330025c-11.556202 0-23.222152 3.771119-34.995515 11.334372-11.773363 7.551578-19.894694 16.880134-24.335975 27.999681L16.665309 492.666887C5.552768 519.779246 0 547.108765 0 574.66245L0 896.008465c0 11.556202 4.21945 21.552586 12.665355 30.000825 8.450575 8.436565 18.451628 12.665355 30.007831 12.665355l938.67231 0c11.553867 0 21.55025-4.22879 29.99849-12.665355 8.4389-8.445905 12.65835-18.442288 12.65835-30.000825L1024.002335 574.66245C1024 547.108765 1018.461242 519.779246 1007.339361 492.666887zM682.002732 554.667348l-63.310428 128.005546-213.347246 0-63.333779-128.005546L131.340009 554.667348c0.450666-0.887322 0.999405-2.661966 1.669566-5.328602 0.670162-2.661966 1.225905-4.443615 1.669566-5.330937l141.331722-330.660561 472.003959 0 141.320047 330.660561c0.453001 1.342658 1.00641 3.117302 1.660226 5.330937 0.672497 2.2113 1.22357 3.985944 1.678907 5.328602L682.002732 554.667348z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yanjing" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1023.616 511.872c0 98.048-210.944 307.136-511.616 307.136-292.992 0.064-511.616-205.632-511.616-307.136 0-101.44 219.584-306.816 511.616-306.816C814.976 205.056 1023.68 410.432 1023.616 511.872L1023.616 511.872zM512.448 261.12C376.256 261.12 265.92 373.44 265.92 512s110.4 250.944 246.528 250.944c136.192 0 246.592-112.384 246.592-250.944C759.04 373.44 648.64 261.12 512.448 261.12L512.448 261.12zM512 351.872c-86.72 0-156.992 71.552-156.992 159.808S425.28 671.424 512 671.424s156.992-71.552 156.992-159.808C668.992 423.36 598.72 351.872 512 351.872L512 351.872z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiaoxi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M734.17666 510.417969c-30.885428 0-55.946196-25.069979-55.946196-55.948243 0-30.885428 25.060769-55.954383 55.946196-55.954383 30.886451 0 55.95029 25.068955 55.95029 55.954383C790.12695 485.34799 765.063111 510.417969 734.17666 510.417969L734.17666 510.417969 734.17666 510.417969zM510.376525 510.417969c-30.885428 0-55.949266-25.069979-55.949266-55.948243 0-30.885428 25.063839-55.954383 55.949266-55.954383 30.887474 0 55.951313 25.068955 55.951313 55.954383C566.327838 485.34799 541.263999 510.417969 510.376525 510.417969L510.376525 510.417969 510.376525 510.417969zM286.648021 510.417969c-30.884404 0-55.948243-25.069979-55.948243-55.948243 0-30.885428 24.990161-55.954383 55.948243-55.954383 30.959106 0 55.949266 25.068955 55.949266 55.954383C342.597287 485.34799 317.534472 510.417969 286.648021 510.417969L286.648021 510.417969 286.648021 510.417969zM510.376525 62.888306c-247.151983 0-447.527616 175.312818-447.527616 391.580396 0 123.610272 65.575508 233.646388 167.850869 305.409828l0 198.067055 196.048071-118.986975c27.1565 4.473895 55.056943 7.084349 83.628676 7.084349 247.15403 0 447.529663-175.311795 447.529663-391.573233C957.906188 238.202147 757.604232 62.888306 510.376525 62.888306L510.376525 62.888306 510.376525 62.888306z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shenhebijijishibenxiezi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M335.872 561.664l-0.128 0.512c-0.128 0.384-0.256 0.896-0.64 1.536l-0.384 0.512c-0.384 0.512-0.64 0.768-0.768 1.152l-48.128 176.384c-2.432 9.088 0.128 18.688 6.784 25.6 4.864 4.736 11.648 7.424 18.688 7.424 2.304 0 4.608-0.256 6.784-0.896L495.36 726.144l0.256 0.128 0.512-0.128c0.896-0.256 1.28-0.384 1.792-1.024l468.48-468.608c13.056-13.184 20.352-31.232 20.352-51.072 0-22.528-9.6-44.928-26.24-61.44l-44.288-44.288c-16.64-16.64-39.168-26.24-61.696-26.24-19.584 0-37.76 7.168-51.072 20.352L335.872 561.664 335.872 561.664zM796.16 182.784l48.384-48.384c8.704-8.576 24.96-7.552 34.944 2.048l44.288 44.288c5.248 5.248 8.32 12.416 8.32 19.328-0.256 6.4-2.304 11.52-6.144 15.36l-49.28 49.152L796.16 182.784zM410.24 568.96l343.424-343.424 80.768 82.048L491.52 650.368 410.24 568.96zM348.544 711.296l27.648-102.016 74.112 74.24L348.544 711.296z"  ></path>' +
    '' +
    '<path d="M952.96 402.56c-15.744 0-28.544 12.928-28.544 28.8l0 436.864c0 24.96-20.224 45.184-45.184 45.184L140.032 913.408c-24.96 0-45.184-20.224-45.184-45.184L94.848 155.136c0-24.96 20.352-45.184 45.184-45.184l475.904 0c15.744 0 28.544-12.8 28.544-28.544s-12.8-28.544-28.544-28.544L134.912 52.864c-53.888 0-97.664 43.776-97.664 97.664l0 722.944c0 53.888 43.776 97.664 97.664 97.664l748.8 0c53.888 0 97.664-43.776 97.664-97.664L981.376 431.104C981.504 415.36 968.704 402.56 952.96 402.56z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-chart" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M479.651244 129.21799C250.383584 129.21799 64.523549 315.075978 64.523549 544.347732c0 229.265614 185.860035 415.127695 415.127695 415.127695 229.27073 0 415.127695-185.862082 415.127695-415.127695L479.651244 544.347732 479.651244 129.21799zM544.345686 64.523549l0 415.129742 415.129742 0C959.475428 250.381537 773.616416 64.523549 544.345686 64.523549z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-username" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M635.1872 574.5664C745.198933 528.0768 822.237867 425.0624 822.237867 300.6464 822.237867 133.563733 683.4176 0 512.170667 0 340.923733 0 202.103467 136.3968 202.103467 303.479467 202.103467 427.895467 279.1424 527.633067 389.12 574.088533 181.998933 622.08 24.132267 788.241067 0.170667 1024L1024.136533 1024C1000.209067 788.241067 842.308267 622.523733 635.1872 574.5664ZM618.530133 439.978667C591.4624 469.230933 550.638933 486.024533 506.5728 486.024533 462.472533 486.024533 421.6832 469.230933 394.615467 439.978667 386.423467 431.104 387.140267 417.450667 396.219733 409.463467 405.265067 401.442133 419.293867 402.158933 427.485867 410.999467 445.883733 430.8992 475.4432 442.7776 506.5728 442.7776 537.668267 442.7776 567.227733 430.8992 585.659733 410.999467 593.851733 402.158933 607.8464 401.442133 616.925867 409.463467 626.005333 417.450667 626.722133 431.104 618.530133 439.978667Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)