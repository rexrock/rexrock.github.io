(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var c=n(0),r=n.n(c);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},a=Object.keys(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},o=r.a.forwardRef((function(e,t){var n=e.components,c=e.mdxType,a=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=p(n),o=c,d=u["".concat(l,".").concat(o)]||u[o]||f[o]||a;return n?r.a.createElement(d,b(b({ref:t},i),{},{components:n})):r.a.createElement(d,b({ref:t},i))}));function d(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var a=n.length,l=new Array(a);l[0]=o;var b={};for(var s in t)hasOwnProperty.call(t,s)&&(b[s]=t[s]);b.originalType=e,b.mdxType="string"==typeof e?e:c,l[1]=b;for(var i=2;i<a;i++)l[i]=n[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}o.displayName="MDXCreateElement"},131:function(e,t,n){"use strict";n.r(t),t.default="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAZ8AAACbCAYAAAC9BJY2AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAB6dSURBVHhe7Z3JqxzX+Yb9x+SvsDZxFl4II4FJwNk4EmhlEixpEQgYIoksvNIA2SSggYBJkCWBVxq9skYIWDMEW4O1iCVFlpCseerf76n2e/3dc0/3rb63qk51633hpU6dqbq/qv6err59+7w1sCzLsqyOZfhYlmVZncvwsSzLsjqX4WNZlmV1LsPHsizL6lyGj2VZltW5DB/Lsiyrcxk+lmVZVucyfCzLsqzOZfhYlmVZncvwsSzLsjqX4WNZlmV1LsPHsizL6lyGj2VZltW5asFn3bp1g1/+8pd2ARN7y7KsWVMt+JAEX79+bRcwsbcsy5o1GT49N7H/73//O/jf//7309mwLMuaftWGz6tXr+wCFnywZVnWrMjw6bkNH8uyZlG14fPy5Uu7gA0fy7JmUYZPz234WJY1i6oNnxcvXtgFbPhYljWLMnx6bsPHsqxZVK/hs2fPnsGNGzeybeN84MCByrm2aOY/c+ZMZcqXL1+u6o8dO5atL2HDx7KsWVRt+Dx//rxRAwcSe65NXr169eDo0aPZtkuXLlVz5Np27Ngx2Lhx4+D06dPVeOa5e/fugn5vvfVW1QfTX4+H/rn6EjZ8LMuaRRWDD16xYsVIgGBBINeG165dW4EmrY/wkb/77rsF/YCPyozRsThurr6EDR/LsmZRteHz7Nmzxs1dycWLFyufOnVqgYHT7t27q35btmxZMB6g0EZfbfGGDRsqax8DkXQ88Ilj2FIPfHL1qXncAJBj59qbsOFjWdYsqih85MXgo/0ffvih6k9ZY6kj+afAAFba379/fwUJjZcjfOjPHMwleOnOiscXx2HmZDzOga0pGz6WZc2iasPn6dOnjfnkyZOVAcu+ffvm1cV+wCCtw4yj7c6dO3Pj2Vf79u3bqz5Hjhyp6tVHvnDhQjUv9TouZUDCGNW9/fbbVb1gpPG00ZfjaBvnb9KGj2VZs6ii8CGhb968ea5+zZo180AxCj4YMFy/fr2CDPv0FXSYV/U4ljHwiZChHMHD+NguAzvGs1XZ8LEsy5pcReAjk7Rj4gYKJHPtj4MPBj6C1S9+8Yu5euYEapo/d/cjAxFAFgFF3WLHlg0fy7KsydUr+OCY8BcDAIDRHQgAYau7EmDCWDmOk4Ed4+JHarENsPAYNBewS/t1AZ9//vOfho9lWTOl3sEnehx8dHeSlukPULSNY2QgwnEBB+ChL3dGAIc2feSmj+MwHwmWgs+f//znwW9+85vBwYMHfzojlmVZ063a8Hny5Enj3rZtW+VcG161alUFgbT+8OHDFVg0lv1du3ZVW/ozjvpr165VW7VRZlG28+fPV2X60caY9evXV3dSlAUv1Y97jMBnXPtyTey56zl37tzg008/HXzwwQeGkGVZU6+i8OFugoQf64ADyZw2Entsi6aPkj6AAC783SfCBzOfIMJW9TjCTfOl4+Nxcu4KPvrY7fvvvzeELMuaetWGz+PHjxvz7du3K7jwbh4DBraxD/uHDh2aVxfNeJL+1atX57aYuYGQoMHcwIT6dA7qd+7cOThx4sTcHQ5l7nzYxvo4jsfGWAx8OB7lzz//fF6/JpzCRzKELMuaZhWBz6ZNm+YlasBAHUlfST21gKAxgkIu4QMHwQPnwIOZV/DRY6Ic4UN9CkHmU3s08Iv9mvAo+EiGkGVZ06ja8Hn06FGnvnLlyuD48eNzZj/tc+vWrQV1yzVztjHvUr0YfCRDyLKsaVJv4WMPXRc+kiFkWdY0qDZ8Hj58aBfwpPCRDCHLsvosw6fnXip8JEPIsqw+yvDpuZcLH8kQsiyrT6oNnx9//NEu4KbgI/UNQuvWraueo929HfsyJu6W4dN7E/sm4SP1BUI8v9evX9sF7NiXMXG3JoDPgwcP7AJuCz5SaQg5AZazY1/Gek3z6ytvsgyfnrtt+EilIMTze/XqlV3Ajn0Zd/Wa7rtqw+f+/ft2AXd9oXYNISfAcnbsy9jwGcrw6blLXahdQYjn9/LlS7uAHfsyNnyGqgWf9957rwqY3b1XrlxZ9EJtG0I8x9wL1G7fjn0ZE3fDpyZ8JAXMLuOSagtCToDl7NiXseEz1ETwuXnz5rxkaHdnYt8HNQ0hXogvXrywC9ixL2PDZ6iJ4GNZ0qQQ4n+WcupTAjxz5szg3r17c/uxnPrGjRsL6nL96Zfr2weXjD2xztWP8+XLl8eek0m9lMfQhA2foQwfa1mqC6HPPvtscOnSpZ/2fhYvxOfPnxfxli1bBqdPn57bX7169eDo0aNV+e7du9UigbE9mkUEd+zYMeeNGzcOVqxYUY2L/RjPPLGuL24j9jx/4hpjk3rt2rVz8UvHf/fdd3Nl5uKa0T79ibP2JzHnNT03nO8DBw7Mq+vChs9Qho/ViBaDkNrSO6CS8CEZAYw9e/ZU+yQjtZFAxyUmkmfcBzIaTwJVEo31fXOJ2AMTYExsUxhg2gQp4hZjp/rYP5o5BT4AF+fCemMhM/eoNxdt2vAZyvCxGtUoCLHPi+6TTz75qWYo6p49e1bMp06dqkyZZMSWJLV///65PrEsA5+4zxwaT5nkl9anZl6OlWvrwl3Hnue6YcOGwQ8//JBtxzFWxBCIa18Q0f44A6Hdu3cvqKdOc3Isnfto2jnOuMe5HBs+Qxk+ViuKEPrb3/5WveBkliuXuk6AFy9erBKgEpkMTNKP0qIZF+dZDD6MSetlkpo+ehoFpi7cVeyBLPHIwSC14gEAOE+xjZgJ6ouZux7Bg3OncgROLMsAUtdC2taUibvhY/hYLQsI/frXv54DD3733Xfn/v7D/tOnT4uaJLdv374qGR05cqRKkvj69evZ/pjktH379sHbb79dbZmD8bSdPHmyqlNZ9TKJUU7bunRXsVec7ty5k22PVjxy8aeNOMe6nDmH9OW4OvbmzZurNuo5J2kZcw3oDQHb2Nakifs0w4c3Bk3I8LFa1ZdffjkHnWj9/Ydy7gXahUmGAg/7JB21kXhIWtRduHBhrl4mwbElSTGPTB1jx8EnHi9t69JdxV4QSOtj7GXFA/jEeizQp/WpmSOCi3Hap01QiWVMmX5sDZ/R+uKLLwYffvhh9W3B5cjwsVrTN998M/bXMfj7D9vcC7RtAw+SXwSL3h1H02dcwiOxqcxcAIikNQ4+MvWj2rpwk7HneRM/gSZazzPXhgVtrHgQyxRM3ClSNw4KtPE4dIcETBindubX+FiOps7wGS0+wtRreP369dXrfCkyfKxWxF0Nf9vRR1ij3DV8SEaAJ72boW5UsonvohkXEyeJLS0zD1v6U1ZCTU39qLYu3FXsFZ9cW+oYDwCic8JWbxZybxIwEBN06KNrLPaPwInlaOrahs9HH31UmeQt82Ysvjaiv/7666xH/f9c29IXiGT+vguUJpHhYxVVVwlwMZMc16xZM7ItvjuXSU5xjJIZNnx+9lLhE+MLQPRRZ7zbjOauSOeJMv15QxDfPOgcpeVo6tqGz7FjxypHkHz11VdZ8OAIqehRnywAh1z/pgDHXOkx+Vsu89QFouFjFRUX7ZMnTzozSWzbtm0LTJLiBUWyy7UfPnx4wVy7du2qrP1Vq1YNrl27ViUtxlBHmXr1iaZ+VFsX7ir2imGuLXWMh2LHomsAR/WcQ+6qtT/K9OGcxjrmY960HE2d4JO2NWHi3vbHbnzRJweSJgE3yu+//36tLyUYPlZRcbHmXqBdmuQGfCgDk/Pnzy/okzMJEdhon4TFlqSl5Eh5FGCoH9XWhbuK/aTwAfRsOSeUGRvhT8yJNectjo0WsNI+zCuoxHI0ddMOn7bFFw4Em2g+fgN8dWT4WEXFBfv48eOi5t3dzp075/Y3bdo0OHTo0Lw+qU+cOFH1i3UkLLa3b9+eq6MfSU77WMmY5IopA6vYpwt3FXs931xbasWK88E5IC65sdQBl6tXry5oI/7Mc+7cuQVtsT99OD/ap8y8XA+cS7bs546xHBP3aYaP/lcpehLoSIaPVVRcuLkXaBcmSZFgUohg6klOJL8IE6zkxpbERNIiWSpxYhIf7ePgEz1r8FFcMPHlOeb6pY6xEoBiezR9mTueH8p8dJoDD6Zejwt4sVUb5fS8YMNnvvjobjnQkQwfq6i4gB89etSpb926Ndi6devg448/Hhw/fjzbB5P4uDMhSe3du7equ3LlSpUUmUP9aOOdMv1VR7/f/e53VT3HUn2f3HbsYwxibMZZ5+Ps2bPzYlzHjE3PTc46rzyuXHvbnnb48KWF5UBHMnysouoaPiS1ccDJOSYzEmpsk0clvLpJt4S7iD1xmTTeS/Woc5Mzj2mS/k16muHDR26TfqV6lAwfq6i6ho/9sx37Mp5m+DQpw8cqKl6IDx8+tAvYsS9jw2cow8cqKifAcnbsy9jwGcrwsYqKFyL/EW13b8e+jA2foWrBZ926dVXA7O5N7GdZPMfcC9Ru3459GRN3w6cmfAjW69ev7QIm9rMsnt+DBw/sAnbsy9jwGao2fF69emUXsC5UfiZkFuUEWM6OfRkbPkMZPj33rF+oPL/79+/bBezYl7HhM5Th03MbPnZbduzL2PAZqjZ8Xr58aRfwrF+ok/5cu92c33nnnWy93a5Xrlxp+Py/DJ+em9i/CReqnqPdvf/zn/9k6+32/SarNnxevHhhF/CbAp+bN2/Oe1Ha3fnbb7/N1tvtmmv+TZbh03O/KfCxLOvNUm34PH/+vFGzzGquPnrjxo2D06dPZ9vGeceOHZW1f/fu3Xnt8tq1a+f6Uj5w4EBVr7q0voQNH8uyZlHF4ANUSOyjwIBXr149Ej6XLl2q4JQbDzQYy3bLli3Vuh30T/tRrzJ9jx49WpUZm6svYcPHsqxZVG34sI5D0wY+u3fvzrZhIHDq1KlsGxZcWF8ircexLmfgozL9dSyOm6svYcPHsqxZVFH4XLx4sQIHdxYCRjSrDW7YsKECzIoVKxZAhn3mSMcDD935xLp0PPCJ7cxDfRxLOYUPxwScjMeU+Rgx9mnKho9lWbOoovCRgUIKBpxL/Ji7JfUn6QMD+qodaOzfv78q0485cndYwE1lwMM+4+jLFqhQL0iqL0DUfBwfMMbjN2nDx7KsWVRt+Dx9+rQxk7i3b98+WLNmzWDz5s1V3YULF6q62I+EfvLkyXl1mDruOK5fv17NFfti4ICPHDlSHYNtHM8+x4qmP3PGOtbu5/GxxXfu3Jk3j0xfxubalmvDx7KsWVQR+CiJK8mrnrJghEfBB9OPeVL4CGJxXDwGZlwECWO461Edc446bs7Mb/hYlmXVVxH4yCTtCAbuZGISHwcfTJvuauK4ffv2VWNlwEKd2qMBD2PT43DHxGOLkBpl/W0q17ZcGz6WZc2iegUfHJP9YvCJCZ++bAGYoERZ7TlzhzMKTDwO5gRMAlHusVBPnzqQWoqJ/V/+8pfBsWPHfjoblmVZ06/a8Hny5Enj3rZtW+VcG161alWV8NN66g4fPlxBgf1r167NlWnj7zPUsY3jMOviMJbjAh7GUV6/fv3g888/H5w/f776SE+PDbAwz65duxbMRX/aGZO2NWVi/49//GPw0UcfDd5///3Bp59+Ovjqq69+OjPTL6+SW86OfRnP+urEddU7+AAHAYekn0vs9BE02AcCmH3GAq3YX8dhXKyPcFOfdLzqtS93AR5M7PWxG9+4O3jw4OCTTz6pfg2ar6B/+eWX1bfiplU8v9wKrnb7duzLmLhbE8Dn8ePHjfr27dsVQDZt2lSVY9uJEycq8JDcY320oECZeYABYxgLPNTv6tWrg0OHDlV9z507N1eP6Ud/ypovHR+PIws8bGN9G47wiWIteMADgAARQAJM1E+TnADL2bEvY72mZ3V14roqAh/BBehgPvLauXPnHAgw9YAjjonwABCCBXBRPebjNNoxxwFOsV2mnWMzT5yP8YKO6tNxwCd1GzAaBZ8o7nz4KI6P5ADRH//4x8EXX3xR3Sn1XTy/3CJ6dvt27Mu4zmv6TVAR+JCk07sQAMJdEIkdA4CY2AFIvEMCVimwJjXH0+Pg+MyFAZL6UJ8+1i69lAv1zJkzg61bt1Z/I+JvRcT7+++//6m1X3ICLGfHvowNn6Fqw+fRo0d2AS/3QuUHVf/6178OPvjgg+oPnXzDj19l6IucAMvZsS9jw2cow6fnbvJC/eabbyr4fPjhh5WBEnUlxfPLreBqt2/HvowNn6Fqw+fhw4d2Abd1oXL3w8dx3A1xV8THdF9//fVPrd3JCbCcHfsyNnyGMnx67i4uVP4exBcU+FtX1/9LxPPLreBqt2/HvowNn6Fqw4ev8Nrdu+sLtev/JepTArx37162fjluY86mXDL2S4lL07EsdW4Mn6EMn5675IXK8Zv4X6Jx/Xl+uRVcu/CePXvmrYTLzynFJdPHrbTLtzG15hMmRrmVdVmJlyU3Yl1f3Ebsef7EIsYmNe18g5XlSnJzRMd4amxsr2s+Zk7rON91HkPTNnyGqg2fBw8e2AXclwt1Of9LxJccgFZOJeHDNwGBiBIQyUhtgAmY5JZfxyTPuB8hExMm9XHePrlE7IkNcSK2uSXyaROkgH+Mnepj/2jeOAh8bBkf54pvLDBzj1qmv00bPkMZPj13Xy/USf6XCPjwPHIAoh6wlTKLBmrhQZIRWxYPJHmpD++aVZaBT9xnwUKNp0yyS+ujOQZtcZHCrt117IkjceF559pxjBU/HBz7CiTaH2cBKK2P83Gs9LFwPqjj/MT6Jt3X13TXMnx67mm4UBf7X6K///3v1fPAKYCoy71A2zJJhaSmRCaTiAAK5bSdtjQZLQYfxqX1mHm42+IdPmYe4qX2Lt1V7IkBJq6LwVaxop8ALjMex7pRJrZ60xCPyfzc6arM41IbsOJ8UM82ztGkp+E13YVqw+f+/ft2AU/bhZr7X6Lf//731fOQI4DYz71AuzR3PiQ1JSb2F3vnK1DpYx6Np20cfJhfyQ8TK+ZqI8kt5q5iTyx4jnXu8hQrzkEEg9pSIOUswHNczDjdBVHWvLGM6aPHyJY56sJuEhP3aYZPU7+WYvj03NN8oZJQ//Wvfw1+9atfVc8jWgCinFvHqCuT/EkwlElGbO/cuVOt08TvArJlP47BWnGXpEq71pGijq3WqaKseXOmnTk0tkt3FXtioXhEs44WiznGOsWK8xLr1ZabJzXnM8aTcToOZbXFcs6041zbckzcpxk+enPJR+/LUS348AdmJQ27W69cuXKqL1S+LZd7XhgAsc29QNs2sCBJxYUE+f3AtI8AFOujeXessiBFQqsLHxY9BD6LLXzYhpuMPc8dIAs00UriuXpiHuGuWBGXFEzEicSX1kcTR+YQvJibcWqnrS58OPd6Y9Kkifs0v6Z5U6nXMP8buNRfSakFH0kBs8t4msTXq0kAfCFBF2pqteVeoG2Z5ERiAzox6ZHQcgCgT0xQ9IsJFPioLFBNAh/axrW36a5ir/jk2lLHWAAmnRPizj7xzN0VycCCc8ZW5zkCJAInllNT39YdKXHnSzqY5C3zrww8t5z59ZGcJ/23h6aUvq75FiwfVU6iieBz8+bNbFK02zexnzbxddp4gabmBcc29wLt2iTHURAYlYBIiHGMkhmuAx+SSqm7HtxV7JcKH+AhcBAr3aUCefWJjh/jKWnrnKhP3E/bZODFmwp9tNq0iTvL4uMIEv6VQY87dYRU9KhPpfjyT65/U4ADnOkx33333WqeukCcCD6WVVdcgHz9+g9/+MOCixTzmTF9KOdWcG3LcYn0aBIa76xz7SzxwXNJ56KOdu3Tj5VtSWiqp0y9+siMBTxtr4Q7zl3FXnHMtaWOsYqx4/xoJWKSKG3qJ8eViinnYs++xsayzDiOxTFifZMm7npT2Zb4UkAOJE0CbpS5K+KjucVk+Fit6t///nf24tQ3ZtjPvUC7Nu90STwkyZjExhlYRXgwB1sS2jj4CDxp4uvaXcV+UvgcPny46k982aaQJ24AIo7LmblSuI+Dj8CTnq+mTdzbhk/b4l8q9HqO5uO3ut+GM3ysVsQ3YfjqKqD57W9/O3dxcmse/0BJXW4RvS7NooQsLEhZK+vGVXRzpp0kFesAitpUx+KEsR+LE9KPY2jxQrzY8dpwV7EXfHJtqRUrwKPFHimn/agjhmm9TBvQSuuJvxal5FjEXm2Ah3MTF5aM7U2ZuE87fHgd6zWNJ4GOZPhYjYk/OH722WfV5838/A7fdEP8DI8u0vTrmdTlXqBdmQRF0omr5FImMZEwR0GB9thGkoyQkUlesZ7jsZ+6bnJu0m3GPl11eFL4YGI3ahzzc6cJhOKx8CjwpOZYES7xfEQ3/caAuE8zfPincr2elwIdqRZ8Rt1i2e2b2Pdd8S6HXzNIL0Z9NRMIpaI+9wJt2yQdfayTayeh8c6bd8IkoJjMSKZaWp3ERLKjX5yLd8/Mr78fqL5PbjP2xI+YAQhiQ8xy/VKrH/Fd7K4jhQLH5ByMW/aeNp1XnIKrCxP3aYYPP6u1HOhIteBDsF6/fm0XMLHvo0bd5eTERQqUcuL55VZwbctnz56twHD8+PFse+orV65UY7TPuFu3bs3rg5kzraMfiS7Xvw/uIvbEj2SVa2vauXMwynv37p2of5OedvgsFzqS4dNz60Llj6F90GJ3OTmN+ye0ruFj/2zHvoynHT5NqTZ8Xr16ZRdwHy7USe5yJhXPL7eCq92+HfsyNnyGMnx67pIX6lLuciaVE2A5O/ZlbPgMVRs+L1++tAu46wu1zbucnHh+/LOp3b0d+zI2fIYyfHruri7ULu5ycnICLGfHvowNn6EMn567zQu167ucnHh+uUX07Pbt2Jex4TNUbfi8ePHCLuA2LtRSdzk5OQGWs2NfxobPUL2GD0kyV7+YGXf58uVsW3TsQ/nevXtV+caNG9n6Em7qQu3DXU5OToDl7NiXseEzVG34PH/+vFGzlDA/05Brk/nJ8wMHDmTbGMt/zufaWDqXd/aU7969W+2nfTD/4RyX2lU/ldP6El7uhdqnu5yceH65FVzt9u3Yl7HhM1Qx+AAFfnrj9OnT2XZM4h/XvmLFigpiaX2EhpwDHfBRmT46FmNz9SW8lAu1r3c5OTkBlrNjX8aGz1C14fPs2bPGTWIHHrk2DAROnTpVJdNcP9qY4+LFi9VdkOqpw2nfuI+Bj8r0Vx+Om6uP5pg6zrjnsFxPcqH2/S4nJy/RXs7vvPNOtt5u19O+NH5TKgofef/+/XOJPJo7I1Yy1D4Qor+2Msk/3ulQXrt27dw+CZm50nHpx24cC4hR5q6KOSin8GHhJeZjXsw8bGOfpkzsx12o03SXM05eJbecv/3222y93a6ncXXiJlUbPrnlYJdrlrzVsrcs6sTytbGdxE99rMOsNqllebUWP33VThtL8FIfy2qXtSwv5nEAFD0OzC8Ss8Qx/dK+cT6OAYC036RHwWca73Isy7KkIvAhWWPdbaiefcFI+zn4kPgBBX0FBfoyJ3clzIkZi6mL4xkjgMnAQ3WaK3UOYJhxPJ5c23Id4TMrdzmWZVlF73yU1LXPHUpM4qPgg3X3IbBwl6I25gQwgo9ApPbUgpX2mZu1WEbBBjM/x6EfjtBs0sT+4MGDgz/96U++y7Esa2bUK/ioTuVx8MGAh4/FKEdoUae5ZfWLBi5AB3CloAGE3A0xNgcWwYfxumtK+zRhYv/xxx8P+LuYZVnWrKh38IleDD60p2X6cycCmMYBAXgALOABeIATW5k+zAVYMIAa9VjUb9xjXaqJfe5vPpZlWdOs2vB58uRJ42bJW5xrwyxfTEJP6w8fPly1ARf26UP5/PnzVZk26lnGV9tr165VZRZlYzz79GOJYx6D5mM8UNJjU73GjzLwGfdclmrDx7KsWVRR+JDU04QNHJT4Sejsx3ZZfSgLGro7EXxk6rgbAk6xnn60UdZ86fh4HFlQk5mXx5rO34QNH8uyZlG14fP48eNGTULfuXNnlcjZpu3Us/59Wi/rjuX27dtV+cSJE9Wa7FevXq0gxD5mbtrPnTtX9Y1zABn6UBZk2KdefVSvfcz8mHoeI+DhGLFPUzZ8LMuaRRWBDwk7gkUJHyvZp+bORaDA6gukUqgAnDg2jotmjvixm/qmH7vl4Ajo1Aewpe1N2fCxLGsWVRs+jx49asy3bt0aWX/8+PHKe/fuHWzdunXO1KV9z549O3KuOo7jtb1y5cq8Yy1n/iZs+FiWNYsqAh+7vg0fy7JmUYZPz234WJY1i6oNn4cPH9oFbPhYljWLMnx6bsPHsqxZVG34/Pjjj3YBGz6WZc2iDJ+e2/CxLGsWVRs+Dx48sAvY8LEsaxZl+PTcho9lWbOo2vC5f/++XcCGj2VZsyjDp+c2fCzLmkXVgs97771XJUG7e69cudLwsSxr5lQLPpKSoF3GlmVZs6KJ4HPz5s1sUrTbN7G3LMuaFU0EH8uyLMtqQoaPZVmW1bkMH8uyLKtzGT6WZVlW5zJ8LMuyrM5l+FiWZVkdazD4PwUjb9TKKvTnAAAAAElFTkSuQmCC"},132:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/ebpf_in_tc-1f2a019c403132cfe2f32de25974275c.jpg"},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var c=n(3),r=n(7),a=(n(0),n(104)),l={slug:"run-ebpf-with-tc",title:"Run ebpf with tc",author:"Yangzai",author_title:"System Enginner @ netease",author_url:"https://github.com/rexrock",author_image_url:"../static/img/author.jpg",tags:["ebpf","tc"]},b={permalink:"/blog/run-ebpf-with-tc",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2021-02-19-ebpf-and-tc.md",source:"@site/blog/2021-02-19-ebpf-and-tc.md",description:"1\\. TC\u7684\u51e0\u4e2a\u6982\u5ff5",date:"2021-02-19T00:00:00.000Z",tags:[{label:"ebpf",permalink:"/blog/tags/ebpf"},{label:"tc",permalink:"/blog/tags/tc"}],title:"Run ebpf with tc",readingTime:2.03,truncated:!1,nextItem:{title:"Welcome",permalink:"/blog/welcome"}},s=[{value:"1. TC\u7684\u51e0\u4e2a\u6982\u5ff5",id:"1-tc\u7684\u51e0\u4e2a\u6982\u5ff5",children:[]},{value:"2. \u4e3e\u4e2a\u7b80\u5355\u7684TC\u4f8b\u5b50",id:"2-\u4e3e\u4e2a\u7b80\u5355\u7684tc\u4f8b\u5b50",children:[{value:"2.1 \u521b\u5efa\u961f\u5217",id:"21-\u521b\u5efa\u961f\u5217",children:[]},{value:"2.2 \u521b\u5efa\u7c7b\u522b",id:"22-\u521b\u5efa\u7c7b\u522b",children:[]},{value:"2.3 \u521b\u5efa\u5206\u7c7b\u5668",id:"23-\u521b\u5efa\u5206\u7c7b\u5668",children:[]},{value:"2.4 ingress qdisc",id:"24-ingress-qdisc",children:[]}]},{value:"3. \u5982\u4f55\u4f7f\u7528tc\u7684ebpf\u529f\u80fd",id:"3-\u5982\u4f55\u4f7f\u7528tc\u7684ebpf\u529f\u80fd",children:[]},{value:"4. \u6700\u4f73\u5b9e\u8df5",id:"4-\u6700\u4f73\u5b9e\u8df5",children:[]}],i={toc:s};function p(e){var t=e.components,l=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(c.a)({},i,l,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"1-tc\u7684\u51e0\u4e2a\u6982\u5ff5"},"1","."," TC\u7684\u51e0\u4e2a\u6982\u5ff5"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"\u961f\u5217\u2014\u2014qdisc(queueing discipline)\uff0c\u5206\u4e3a\u4e0d\u53ef\u5206\u7c7b\u961f\u5217\uff08classless qdisc\uff09\u548c\u53ef\u5206\u7c7b\u961f\u5217\uff08classful qdisc\uff09,\u4e00\u4e2aqdisc\u4f1a\u88ab\u5206\u914d\u4e00\u4e2a\u4e3b\u5e8f\u5217\u53f7\uff0c\u53eb\u505a\u53e5\u67c4(handle)\uff0c\u7136\u540e\u628a\u4ece\u5e8f\u5217\u53f7\u4f5c\u4e3a\u7c7b\u7684\u547d\u540d\u7a7a\u95f4\u3002\u53e5\u67c4\u91c7\u7528\u8c6110:\u4e00\u6837\u7684\u8868\u8fbe\u65b9\u5f0f\u3002\u4e60\u60ef\u4e0a\uff0c\u9700\u8981\u4e3a\u6709\u5b50\u7c7b\u7684QDisc\u663e\u5f0f\u5730\u5206\u914d\u4e00\u4e2a\u53e5\u67c4\u3002\u961f\u5217\u771f\u6b63\u7684\u5b9e\u73b0QoS\u529f\u80fd\uff1b")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"\u7c7b\u522b\u2014\u2014class\uff0c\u901a\u8fc7\u5206\u7c7b\u5668\u5c06\u6d41\u91cf\u5212\u5206\u4e3a\u4e0d\u540c\u7684class\uff0c\u4e00\u4e2aclass\u5bf9\u5e94\u4e00\u4e2aqos\u5bf9\u8c61\uff08\u5373\u4e00\u4e2a\u5177\u4f53\u7684\u53ef\u4ee5\u914d\u7f6eqos\u7b56\u7565\u7684\u5b50\u961f\u5217\uff09\uff0c\u6dfb\u52a0class\u7684\u65f6\u5019\u9700\u8981\u6307\u5b9a\u8be5class\u5bf9\u5e94\u7684qos\u7b56\u7565\uff08\u5c31\u662f\u7ed9\u591a\u5c11\u5e26\u5bbd\u8fd9\u79cd\uff09\uff1b")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"\u5206\u7c7b\u5668\u2014\u2014filter\uff0c\u7528\u4e8e\u5c06\u6d41\u91cf\u5212\u5206\u4e3a\u4e0d\u540c\u7684class\uff1b"),Object(a.b)("p",{parentName:"li"},"  ",Object(a.b)("strong",{parentName:"p"},"\u7528\u4e00\u5f20\u56fe\u8868\u793a\u4e09\u8005\u7684\u5173\u7cfb\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),"\n",Object(a.b)("img",{alt:"img",src:n(131).default})))),Object(a.b)("h2",{id:"2-\u4e3e\u4e2a\u7b80\u5355\u7684tc\u4f8b\u5b50"},"2","."," \u4e3e\u4e2a\u7b80\u5355\u7684TC\u4f8b\u5b50"),Object(a.b)("h3",{id:"21-\u521b\u5efa\u961f\u5217"},"2.1 \u521b\u5efa\u961f\u5217"),Object(a.b)("p",null,"\u6709\u5173\u961f\u5217\u7684TC\u547d\u4ee4\u7684\u4e00\u822c\u5f62\u5f0f\u4e3a:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"tc qdisc [add|change|replace|link] dev DEV [parent qdisk-id|root][handle qdisc-id] qdisc[qdisc specific parameters]\n")),Object(a.b)("p",null,"\u9996\u5148\uff0c\u9700\u8981\u4e3a\u7f51\u5361eth0\u914d\u7f6e\u4e00\u4e2aHTB\u961f\u5217\uff0c\u4f7f\u7528\u4e0b\u5217\u547d\u4ee4:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"tc qdisc add dev eth0 root handle 1:htb default 11\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\u53c2\u6570\u8bf4\u660e\uff1a")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"add \u8868\u793a\u8981\u6dfb\u52a0"),Object(a.b)("li",{parentName:"ul"},"dev eth0 \u8868\u793a\u8981\u64cd\u4f5c\u7684\u7f51\u5361\u4e3aeth0"),Object(a.b)("li",{parentName:"ul"},"root \u8868\u793a\u4e3a\u7f51\u5361eth0\u6dfb\u52a0\u7684\u662f\u4e00\u4e2a\u6839\u961f\u5217"),Object(a.b)("li",{parentName:"ul"},"handle 1: \u8868\u793a\u961f\u5217\u7684\u53e5\u67c4\u4e3a1:"),Object(a.b)("li",{parentName:"ul"},"htb \u8868\u793a\u8981\u6dfb\u52a0\u7684\u961f\u5217\u4e3aHTB\u961f\u5217"),Object(a.b)("li",{parentName:"ul"},"\u547d\u4ee4\u6700\u540e\u7684\u201ddefault 11 \u662fhtb\u7279\u6709\u7684\u961f\u5217\u53c2\u6570\uff0c\u610f\u601d\u662f\u6240\u6709\u672a\u5206\u7c7b\u7684\u6d41\u91cf\u90fd\u5c06\u5206\u914d\u7ed9\u7c7b\u522b1:11")),Object(a.b)("h3",{id:"22-\u521b\u5efa\u7c7b\u522b"},"2.2 \u521b\u5efa\u7c7b\u522b"),Object(a.b)("p",null,"\u6709\u5173\u7c7b\u522b\u7684TC \u547d\u4ee4\u7684\u4e00\u822c\u5f62\u5f0f\u4e3a:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"tc class [add|change|replace] dev DEV parent qdisc-id [classid class-id] qdisc [qdisc specific parameters]\n")),Object(a.b)("p",null,"\u53ef\u4ee5\u5229\u7528\u4e0b\u9762\u8fd9\u4e09\u4e2a\u547d\u4ee4\u4e3a\u6839\u961f\u52171\u521b\u5efa\u4e09\u4e2a\u7c7b\u522b\uff0c\u5206\u522b\u662f1:11\u30011:12\u548c1:13\uff0c\u5b83\u4eec\u5206\u522b\u5360\u752840\u300140\u548c20mb","[","t\u7684\u5e26\u5bbd\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"tc class add dev eth0 parent 1: classid 1:11 htb rate 40mbit ceil 40mbit\ntc class add dev eth0 parent 1: classid 1:12 htb rate 40mbit ceil 40mbit\ntc class add dev eth0 parent 1: cllassid 1:13 htb rate 20mbit ceil 20mbit\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\u53c2\u6570\u8bf4\u660e\uff1a")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"parent 1: \u8868\u793a\u7c7b\u522b\u7684\u7236\u4eb2\u4e3a\u6839\u961f\u52171:"),Object(a.b)("li",{parentName:"ul"},"classid1:11 \u8868\u793a\u521b\u5efa\u4e00\u4e2a\u6807\u8bc6\u4e3a1:11\u7684\u7c7b\u522b"),Object(a.b)("li",{parentName:"ul"},"rate 40mbit \u8868\u793a\u7cfb\u7edf\u5c06\u4e3a\u8be5\u7c7b\u522b\u786e\u4fdd\u5e26\u5bbd40mbit"),Object(a.b)("li",{parentName:"ul"},"ceil 40mbit \u8868\u793a\u8be5\u7c7b\u522b\u7684\u6700\u9ad8\u53ef\u5360\u7528\u5e26\u5bbd\u4e3a40mbit")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\u6ce8\u610f\uff0c \u5728TC \u4e2d\u4f7f\u7528\u4e0b\u5217\u7684\u7f29\u5199\u8868\u793a\u76f8\u5e94\u7684\u5e26\u5bbd\uff1a")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Kbps kiIobytes per second\uff0c \u5373\u201d\u5343\u5b57\u8282\u6bcf\u79d2"),Object(a.b)("li",{parentName:"ul"},"Mbps megabytes per second\uff0c \u5373\u201d\u5146\u5b57\u8282\u6bcf\u79d2"),Object(a.b)("li",{parentName:"ul"},"Kbit kilobits per second\uff0c\u5373\u201d\u5343\u6bd4\u7279\u6bcf\u79d2"),Object(a.b)("li",{parentName:"ul"},"Mbit megabits per second\uff0c \u5373\u201d\u5146\u6bd4\u7279\u6bcf\u79d2")),Object(a.b)("h3",{id:"23-\u521b\u5efa\u5206\u7c7b\u5668"},"2.3 \u521b\u5efa\u5206\u7c7b\u5668"),Object(a.b)("p",null,"\u6709\u5173\u8fc7\u6ee4\u5668\u7684TC \u547d\u4ee4\u7684\u4e00\u822c\u5f62\u5f0f\u4e3a:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"tc filter [add|change|replace] dev DEV [parent qdisc-id|root] protocol protocol prio priority filtertype [filtertype specific parameters] flowid flow-id\n")),Object(a.b)("p",null,"\u7531\u4e8e\u9700\u8981\u5c06WWW\u3001E-mail\u3001Telnet\u4e09\u79cd\u6d41\u91cf\u5206\u914d\u5230\u4e09\u4e2a\u7c7b\u522b\uff0c\u5373\u4e0a\u8ff01:11\u30011:12\u548c1:13\uff0c\u56e0\u6b64\uff0c\u9700\u8981\u521b\u5efa\u4e09\u4e2a\u8fc7\u6ee4\u5668\uff0c\u5982\u4e0b\u9762\u7684\u4e09\u4e2a\u547d\u4ee4:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"tc filter add dev eth0 protocol ip parent 1:0 prio 1 u32 match ip dport 80 0xffff flowid 1:11\ntc filter add dev eth0 prtocol ip parent 1:0 prio 1 u32 match ip dport 25 0xffff flowid 1:12\ntc filter add dev eth0 protocol ip parent 1:0 prio 1 u32 match ip dport 23 oxffff flowid 1:13\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\u53c2\u6570\u8bf4\u660e\uff1a"),"\nprotocol ip \u8868\u793a\u8be5\u8fc7\u6ee4\u5668\u5e94\u8be5\u68c0\u67e5\u62a5\u6587\u5206\u7ec4\u7684\u534f\u8bae\u5b57\u6bb5\nprio 1 \u8868\u793a\u5b83\u4eec\u5bf9\u62a5\u6587\u5904\u7406\u7684\u4f18\u5148\u7ea7\u662f\u76f8\u540c\u7684\uff0c\u5bf9\u4e8e\u4e0d\u540c\u4f18\u5148\u7ea7\u7684\u8fc7\u6ee4\u5668\uff0c \u7cfb\u7edf\u5c06\u6309\u7167\u4ece\u5c0f\u5230\u5927\u7684\u4f18\u5148\u7ea7\u987a\u5e8f\u6765\u6267\u884c\u8fc7\u6ee4\u5668\uff0c\u5bf9\u4e8e\u76f8\u540c\u7684\u4f18\u5148\u7ea7\uff0c\u7cfb\u7edf\u5c06\u6309\u7167\u547d\u4ee4\u7684\u5148\u540e\u987a\u5e8f\u6267\u884c\u3002\n\u8fd9\u51e0\u4e2a\u8fc7\u6ee4\u5668\u8fd8\u7528\u5230\u4e86u32\u9009\u62e9\u5668(\u547d\u4ee4\u4e2du32\u540e\u9762\u7684\u90e8\u5206)\u6765\u5339\u914d\u4e0d\u540c\u7684\u6570\u636e\u6d41\u3002\u4ee5\u7b2c\u4e00\u4e2a\u547d\u4ee4\u4e3a\u4f8b\uff0c\u5224\u65ad\u7684\u662fdport\u5b57\u6bb5\uff0c\u5982\u679c\u8be5\u5b57\u6bb5\u4e0eOxffff\u8fdb\u884c\u4e0e\u64cd\u4f5c\u7684\u7ed3\u679c\u662f80\uff0c\u5219\u201cflowid 1:11\u201d \u8868\u793a\u5c06\u628a\u8be5\u6570\u636e\u6d41\u5206\u914d\u7ed9\u7c7b\u522b1:11"),Object(a.b)("h3",{id:"24-ingress-qdisc"},"2.4 ingress qdisc"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"ingress qdisc\u6ca1\u6709\u4efb\u4f55\u53c2\u6570\uff0c\u6211\u4eec\u53ef\u4ee5\u50cf\u4e0b\u9762\u8fd9\u6837\u6dfb\u52a0\u4e00\u4e2aingress qdisc:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"tc qdisc add dev eth0 ingress\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"ingress qdisc\u4e0d\u5360\u7528\u6839\u961f\u5217\uff0c\u521b\u5efaingress qdisc\u540e\u6211\u4eec\u8fd8\u80fd\u7ee7\u7eed\u521b\u5efa\u5176\u4ed6\u7684tx\u7684qdisc\uff1b"),Object(a.b)("li",{parentName:"ul"},"ingress qdisc\u4e0d\u652f\u6301\u4efb\u4f55\u5b50\u7c7b\u522b\uff0c\u6240\u4ee5\u6211\u4eec\u65e0\u6cd5\u4e3aingress qdisc\u521b\u5efaclass\uff0c\u4f46\u662f\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u4e3aingress qdisc\u521b\u5efa\u5206\u7c7b\u5668\uff1b")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"tc qdisc add dev eth0 handle ffff: ingress \ntc filter add dev eth0 parent ffff: protocol all prio 49 basic police rate 10mbit burst 1mb mtu 65535 drop\n")),Object(a.b)("p",null,"police\u53c2\u8003\uff1a",Object(a.b)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man8/tc-police.8.html"},"https://man7.org/linux/man-pages/man8/tc-police.8.html")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\u53c2\u6570\u8bf4\u660e\uff1a"),"\nrate \u9650\u5236\u7684\u6700\u5927\u6d41\u91cf\uff1f\u540e\u9762\u7684drop\u52a8\u4f5c\u662f\u6307\u8d85\u8fc7\u9650\u901f\u7684\u6d41\u91cf\u8fd8\u662f\u547d\u4e2d\u7684\u6d41\u91cf\uff1f\uff1f\uff1f\nburst \u6bcf\u4e2a\u8ba1\u65f6\u5668\u7684\u6d41\u91cf\u5cf0\u503c\uff0c\u5e94\u8be5\u540cHTB\u7684burst\nmtu \u5339\u914d\u7684mtu\ndrop \uff1f"),Object(a.b)("h2",{id:"3-\u5982\u4f55\u4f7f\u7528tc\u7684ebpf\u529f\u80fd"},"3","."," \u5982\u4f55\u4f7f\u7528tc\u7684ebpf\u529f\u80fd"),Object(a.b)("p",null,"\u4ece\u5185\u68384.1\u7248\u672c\u8d77\uff0ctc\u5f15\u5165\u4e86\u4e00\u4e2a\u7279\u6b8a\u7684qdisc\uff0c\u53eb\u505aclsact\uff0c\u5b83\u4e3aTC\u63d0\u4f9b\u4e86\u4e00\u4e2a\u53ef\u4ee5\u52a0\u8f7dBPF\u7a0b\u5e8f\u7684\u5165\u53e3\uff0c\u4f7fTC\u548cXDP\u4e00\u6837\uff0c\u6210\u4e3a\u4e00\u4e2a\u53ef\u4ee5\u52a0\u8f7dBPF\u7a0b\u5e8f\u7684\u7f51\u7edc\u94a9\u5b50\u3002"),Object(a.b)("p",null,Object(a.b)("img",{alt:"img",src:n(132).default})),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"TC vs XDP"),"\n\u8fd9\u4e24\u4e2a\u94a9\u5b50\u90fd\u53ef\u4ee5\u7528\u4e8e\u76f8\u540c\u7684\u5e94\u7528\u573a\u666f\uff0c\u5982DDoS\u7f13\u89e3\u3001\u96a7\u9053\u3001\u5904\u7406\u94fe\u8def\u5c42\u4fe1\u606f\u7b49\u3002\u4f46\u662f\uff0c\u7531\u4e8eXDP\u5728\u4efb\u4f55\u5957\u63a5\u5b57\u7f13\u51b2\u533a\uff08SKB\uff09\u5206\u914d\u4e4b\u524d\u8fd0\u884c\uff0c\u6240\u4ee5\u5b83\u53ef\u4ee5\u8fbe\u5230\u6bd4TC\u4e0a\u7684\u7a0b\u5e8f\u66f4\u9ad8\u7684\u541e\u5410\u91cf\u503c\u3002\u7136\u800c\uff0c\u540e\u8005\u53ef\u4ee5\u4ece\u901a\u8fc7 struct ","_","_","sk","_","buff \u63d0\u4f9b\u7684\u989d\u5916\u7684\u89e3\u6790\u6570\u636e\u4e2d\u53d7\u76ca\uff0c\u5e76\u4e14\u53ef\u4ee5\u6267\u884c BPF \u7a0b\u5e8f\uff0c\u5bf9\u5165\u7ad9\u6d41\u91cf\u548c\u51fa\u7ad9\u6d41\u91cf\u90fd\u53ef\u4ee5\u6267\u884c BPF \u7a0b\u5e8f\uff0c\u662f TX \u94fe\u8def\u4e0a\u7684\u80fd\u88ab\u64cd\u63a7\u7684\u6700\u540e\u4e00\u4e2a\u70b9\u3002\n",Object(a.b)("strong",{parentName:"p"},"\u65e0\u9700\u7f51\u5361\u9a71\u52a8\u7684\u652f\u6301"),"\ntc BPF \u7a0b\u5e8f\u4e0d\u9700\u8981\u9a71\u52a8\u505a\u4efb\u4f55\u6539\u52a8\uff0c\u56e0\u4e3a\u5b83\u4eec\u8fd0\u884c\u5728\u7f51\u7edc\u6808\u901a\u7528\u5c42\u4e2d\u7684 hook \u70b9\u3002\u56e0\u6b64\uff0c\u5b83\u4eec\u53ef\u4ee5 attach \u5230\u4efb\u4f55\u7c7b\u578b\u7684\u7f51\u7edc\u8bbe\u5907\u4e0a\u3002\n",Object(a.b)("strong",{parentName:"p"},"Ingress"),"\n\u8fd9\u63d0\u4f9b\u4e86\u5f88\u597d\u7684\u7075\u6d3b\u6027\uff0c\u4f46\u8ddf\u8fd0\u884c\u5728\u539f\u751f XDP \u5c42\u7684\u7a0b\u5e8f\u76f8\u6bd4\uff0c\u6027\u80fd\u8981\u5dee\u4e00\u4e9b\u3002\u7136\u800c\uff0ctc BPF \u7a0b\u5e8f\u4ecd\u7136\u662f\u5185\u6838\u7684\u901a\u7528 data path \u505a\u5b8c GRO \u4e4b\u540e\u3001\u4e14\u5904\u7406\u4efb\u4f55\u534f\u8bae\u4e4b\u524d \u6700\u65e9\u7684 \u5904\u7406\u70b9\u3002\u4f20\u7edf\u7684 iptables \u9632\u706b\u5899\u4e5f\u662f\u5728\u8fd9\u91cc\u5904\u7406\u7684\uff0c\u4f8b\u5982 iptables PREROUTING \u6216 nftables ingress hook \u6216\u5176\u4ed6\u6570\u636e\u5305\u5305\u5904\u7406\u8fc7\u7a0b\u3002\n",Object(a.b)("strong",{parentName:"p"},"Egress"),"\n\u7c7b\u4f3c\u7684\uff0c\u5bf9\u4e8e egress\uff0ctc BPF \u7a0b\u5e8f\u5728\u5c06\u5305\u4ea4\u7ed9\u9a71\u52a8\u4e4b\u524d\u7684\u6700\u665a\u7684\u5730\u65b9\uff08latest point\uff09\u6267 \u884c\uff0c\u8fd9\u4e2a\u5730\u65b9\u5728\u4f20\u7edf iptables \u9632\u706b\u5899 hook \u4e4b\u540e\uff08\u4f8b\u5982 iptables POSTROUTING\uff09\uff0c \u4f46\u5728\u5185\u6838 GSO \u5f15\u64ce\u4e4b\u524d\u3002"),Object(a.b)("p",null,"*","*","\u8be6\u7ec6\u53c2\u8003\uff1a","*","*",Object(a.b)("a",{parentName:"p",href:"http://arthurchiao.art/blog/cilium-bpf-xdp-reference-guide-zh/#prog_type_tc"},"http://arthurchiao.art/blog/cilium-bpf-xdp-reference-guide-zh/#prog","_","type","_","tc")),Object(a.b)("h2",{id:"4-\u6700\u4f73\u5b9e\u8df5"},"4","."," \u6700\u4f73\u5b9e\u8df5"),Object(a.b)("p",null,"\u53c2\u8003\uff1a",Object(a.b)("a",{parentName:"p",href:"https://github.com/rexrock/tc-xdp-drop-tcp"},"https://github.com/rexrock/tc-xdp-drop-tcp")),Object(a.b)("p",null,"\u6ce8\u610f\uff1a\u9700\u4f7f\u75284.20\u53ca\u4ee5\u4e0a\u7248\u672c\u7684\u5185\u6838\uff0c\u624d\u80fd\u4f7fveth\u652f\u6301XDP"))}p.isMDXComponent=!0}}]);