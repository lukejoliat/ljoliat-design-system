var _excluded=["variant","children"];function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}/** @jsxImportSource theme-ui */import styled from"@emotion/styled";import React from"react";import{color,space,typography}from"styled-system";import{jsx as _jsx}from"theme-ui/jsx-runtime";var StyledButton=styled("button")(typography,space,color),Button=function(a){var b=a.variant,c=void 0===b?"primary":b,d=a.children,e=_objectWithoutPropertiesLoose(a,_excluded);return _jsx(StyledButton,Object.assign({sx:{variant:"buttons."+c}},e,{children:d}))};export default Button;